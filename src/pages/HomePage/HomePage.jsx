import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { loadAllPosts } from "../../apis/posts";
import { PostsContext } from "../../context/PostsContextProvider";
import LoadingScreen from "../components/LoadingScreen";
import NetworkError from "../components/NetworkError";
import Post from "./components/Post";
import "./styles/HomePage.css";

export default function HomePage() {
  document.title = "BLOGGING - Home Page";
  const { posts, setPosts } = useContext(PostsContext);
  const [Error, setError] = useState(false);

  const fetchPost = async () => {
    try {
      const data = await loadAllPosts();
      setPosts(data);
      setError(false);
      setPosts(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (posts.length === 0) {
      fetchPost();
    }
  }, []);

  return (
    <>
      {posts ? (
        <>
          <main>
            <div className="hero">
              <div className="left">
                <h1>Start adding you blog post for free</h1>
                <p>
                  start immediately posting on our platform without any signup
                  or account just click the link below to post your first free
                  post, Yes completely for free our service is free and it
                  always will be free.
                </p>
                <Link to="/post/add/ ">Write my first post...</Link>
              </div>
              <div className="right"></div>
            </div>
          </main>
          <main className="posts">
            {posts.map((post) => (
              <Post key={post._id} postData={post} />
            ))}
          </main>
        </>
      ) : Error ? (
        <NetworkError fetchPost={fetchPost} />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
