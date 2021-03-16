import Axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import NetworkError from "../components/NetworkError";
import NoPostFound from "../components/NoPostFound";
import Post from "../HomePage/components/Post";

export default function PostPage() {
  const [posts, setPosts] = useState(null);
  const [Error, setError] = useState(false);

  const fetchPost = () => {
    setError(false);
    Axios.get(`https://blogging-backand.herokuapp.com/post/`)
      .then(({ data }) => {
        setError(false);
        setPosts(data.reverse());
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setError(true);
      });
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
