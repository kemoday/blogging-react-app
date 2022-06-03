import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { loadAllPosts } from "../../apis/posts";
import { PostsContext } from "../../context/PostsContextProvider";
import LoadingScreen from "../components/LoadingScreen";
import NetworkError from "../components/NetworkError";
import NoPostFound from "../components/NoPostFound";
import Post from "../HomePage/components/Post";

export default function PostsPage() {
  const { posts, setPosts } = useContext(PostsContext);
  const [Error, setError] = useState(false);

  const fetchPost = useCallback(async () => {
    try {
      const data = await loadAllPosts();
      setPosts(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }, [setPosts]);

  useEffect(() => {
    if (posts.length === 0) {
      fetchPost();
    }
  }, [fetchPost, posts.length]);

  return (
    <>
      {posts?.length === 0 ? (
        <NoPostFound />
      ) : posts ? (
        <main className="posts">
          {posts.map((post) => (
            <Post key={post._id} postData={post} />
          ))}
        </main>
      ) : Error ? (
        <NetworkError fetchPost={fetchPost} />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
