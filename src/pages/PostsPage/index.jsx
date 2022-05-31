import React, { useEffect, useState } from "react";
import { loadAllPosts } from "../../apis/posts";
import LoadingScreen from "../components/LoadingScreen";
import NetworkError from "../components/NetworkError";
import NoPostFound from "../components/NoPostFound";
import Post from "../HomePage/components/Post";

export default function PostsPage() {
  const [posts, setPosts] = useState(null);
  const [Error, setError] = useState(false);

  const fetchPost = async () => {
    try {
      const data = await loadAllPosts();
      setPosts(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
