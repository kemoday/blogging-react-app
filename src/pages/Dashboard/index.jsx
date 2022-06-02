import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";
import SmallLoading from "../components/SmallLoading";
import NetworkError from "../components/NetworkError";
import NoPostFound from "../components/NoPostFound";
import { loadPosts, removePost } from "../../apis/posts";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContextProvider";
import LoadingScreen from "../components/LoadingScreen";

export default function Dashboard() {
  document.title = "BLOGGING - Dashboard";

  const [Error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { posts, setPosts } = useContext(PostsContext);
  const { user } = useContext(UserContext);

  const deletePost = async (id) => {
    try {
      const post = await removePost(id);
      setPosts(posts.filter((item) => item._id !== id));
      console.log(post);
    } catch (error) {
      alert("Error while deleting post.");
    }
  };

  const fetchPost = async () => {
    try {
      const data = await loadPosts(user._id);
      setPosts(data.reverse());
      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    let isMounted = true;

    setLoading(false);
    if (posts.length === 0) fetchPost();
    return () => {
      isMounted = false;
    };
  }, [user]);

  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.views;

  return (
    <>
      <div className="header">
        <ul>
          <li>Dashboard</li>
          <li>Posts {posts?.length || 0}</li>
          <li>Views {posts?.reduce(reducer, 0) || 0}</li>
          <li>
            <Link to="/posts/add">
              Add new <li className="fa fa-plus"></li>
            </Link>
          </li>
        </ul>
      </div>
      {loading ? (
        <SmallLoading />
      ) : Error ? (
        <NetworkError />
      ) : posts.length === 0 ? (
        <NoPostFound />
      ) : (
        <div className="post-list">
          {posts.reverse().map((post) => (
            <div key={post._id} className="table-row">
              <h2>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
              </h2>
              <div className="edit-post">
                <Link to={`/posts/${post._id}`}>
                  <li className="fa fa-eye"></li>
                  <span> {post.views}</span>
                </Link>
                <button onClick={() => deletePost(post._id)}>
                  <li className="fa fa-trash"></li>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/*


        {loading ? (
          <SmallLoading />
        ) : posts.length > 0 ? (
          
        ) : (
          <NetworkError fetchPost={fetchPost} />
        )}
      </div>

*/
