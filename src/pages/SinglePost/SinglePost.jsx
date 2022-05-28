import Axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import PageNotFound from "../components/PageNotFound";
import Post from "../HomePage/components/Post";
import "./styles/SinglePost.css";

export default function SinglePost(props) {
  document.title = `BLOGGING - ${Post?.title}`;

  const [post, setPost] = useState(null);
  const [Error, setError] = useState(false);

  const id = props.match.params.id;

  useEffect(() => {
    Axios.get(`https://blogging-backand.herokuapp.com/post/${id}/`)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            setPost(0);
            setError(true);
          }
        }
      });
  }, [id]);

  return (
    <>
      {post?.title > "" ? (
        <div className="single-post">
          <main>
            <div className="post-thumbnail">
              <h1>{post.title}</h1>
              <p>{post.summary}</p>
            </div>
            <div className="post-content">{post.content}</div>
          </main>
          <aside> </aside>
        </div>
      ) : Error ? (
        <PageNotFound />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
