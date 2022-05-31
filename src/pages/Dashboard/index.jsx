import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";
import SmallLoading from "../components/SmallLoading";
import NetworkError from "../components/NetworkError";
import NoPostFound from "../components/NoPostFound";
import { loadPosts } from "../../apis/posts";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";

export default function Dashboard() {
  document.title = "BLOGGING - Dashboard";

  const [Error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  const deletePost = (id) => {
    if (id) {
      Axios.delete(`https://blogging-backand.herokuapp.com/post/${id}/`)
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => alert("Error while deleting post."));
    }
  };

  const fetchPost = async () => {
    try {
      const data = await loadPosts(user._id);
      setPosts(data.reverse());
      console.log(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
      <div className="post-list">
        {posts?.length === 0 ? (
          <NoPostFound />
        ) : posts ? (
          posts.reverse().map((post) => (
            <div key={post._id} className="table-row">
              <h2>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
              </h2>
              <div className="edit-post">
                <Link to={`/posts/edit/${post._id}`}>
                  <li className="fa fa-edit"></li>
                </Link>
                <Link to={`/posts/${post._id}`}>
                  <li className="fa fa-eye"></li>
                  <span> {post.views}</span>
                </Link>
                <button onClick={() => deletePost(post._id)}>
                  <li className="fa fa-trash"></li>
                </button>
              </div>
            </div>
          ))
        ) : Error ? (
          <NetworkError fetchPost={() => {}} />
        ) : (
          <SmallLoading />
        )}
      </div>
    </>
  );
}
