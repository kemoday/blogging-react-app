import Axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import NetworkError from "../../components/NetworkError";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const [Error, setError] = useState(false);

  const fetchPost = () => {
    setError(false);
    Axios.get(
      `https://crudcrud.com/api/ba6408f9f3bb463ca4d29a2fdfc0a8d6/posts/`
    )
      .then(({ data }) => {
        setError(false);
        setPosts(data);
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
      {posts ? (
        <main className="posts">
          {posts.map((post) => (
            <Post postData={post} />
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
