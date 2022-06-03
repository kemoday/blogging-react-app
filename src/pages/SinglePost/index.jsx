import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { loadPost } from "../../apis/posts";
import { PostsContext } from "../../context/PostsContextProvider";
import LoadingScreen from "../components/LoadingScreen";
import PageNotFound from "../components/PageNotFound";
import Post from "../HomePage/components/Post";
import "./styles/SinglePost.css";

export default function SinglePost(props) {
  document.title = `BLOGGING - ${Post?.title}`;

  const [post, setPost] = useState(null);
  const [Error, setError] = useState(false);
  const { posts } = useContext(PostsContext);

  const id = props.match.params.id;

  useEffect(() => {
    const fetchPost = async () => {
      console.log(id);
      if (posts.lenght > 0) {
        const p = posts.find((item) => item._id === id);
        setPost(p);
        setError(false);
      } else {
        try {
          const data = await loadPost(id);
          setPost(data);
          setError(false);
        } catch (error) {
          setError(true);
        }
      }
    };
    fetchPost();
  }, [id, posts]);

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
