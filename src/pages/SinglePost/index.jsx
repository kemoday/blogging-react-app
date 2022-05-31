import React, { useEffect, useState } from "react";
import { loadPost } from "../../apis/posts";
import LoadingScreen from "../components/LoadingScreen";
import PageNotFound from "../components/PageNotFound";
import Post from "../HomePage/components/Post";
import "./styles/SinglePost.css";

export default function SinglePost(props) {
  document.title = `BLOGGING - ${Post?.title}`;

  const [post, setPost] = useState(null);
  const [Error, setError] = useState(false);

  const id = props.match.params.id;

  const fetchPost = async () => {
    try {
      const data = await loadPost(id);
      setPost(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPost();
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
