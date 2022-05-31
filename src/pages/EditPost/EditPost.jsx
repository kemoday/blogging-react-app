import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import NetworkError from "../components/NetworkError";
import "./../AddPost/styles/AddPost.css";
import Loader from "react-loader-spinner";
import Button from "../components/Button";

export default function EditPost(props) {
  document.title = "BLOGGING - Edit your post";

  const [post, setPost] = useState(null);
  const [Error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const id = props.match.params.id;

  const fetchPost = () => {
    setError(false);
    Axios.get(`https://blogging-backand.herokuapp.com/post/${id}/`)
      .then(({ data }) => {
        setError(false);
        setPost(data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setError(true);
      });
  };

  useEffect(() => {
    const fetchPost = () => {
      setError(false);
      Axios.get(`https://blogging-backand.herokuapp.com/post/${id}/`)
        .then(({ data }) => {
          setError(false);
          setPost(data);
        })
        .catch((err) => {
          setError(true);
        })
        .finally(() => {
          setError(true);
        });
    };
    fetchPost();
  }, [id]);

  const handlePostUpdate = (event) => {
    setLoading(true);
    event.preventDefault();
    const post = {
      title: event.target.title.value,
      content: event.target.content.value,
      summary: event.target.summarize.value,
    };

    Axios.put(`https://blogging-backand.herokuapp.com/post/${id}/`, post)
      .then((res) => {
        props.history.push("/user/dashboard/");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("NetWork Error,please try again");
      });
  };

  return (
    <>
      {post ? (
        <div className="add-new-post">
          <div className="form-wrapper">
            <h1>Edit your post</h1>
            <hr />
            <form onSubmit={handlePostUpdate}>
              <label htmlFor="title">Post Title</label>
              <input
                defaultValue={post.title}
                required
                maxLength={60}
                type="text"
                name="title"
                id="title"
              />
              <label htmlFor="content">Post Content</label>
              <textarea
                required
                rows="8"
                defaultValue={post.content}
                type="text"
                name="content"
                id="content"
              />
              <label htmlFor="title">Post Summarize</label>
              <textarea
                required
                rows="3"
                defaultValue={post.summary}
                name="summarize"
                id="summarize"
              />
              <div className="publish-btns">
                {loading ? (
                  <Loader
                    type="TailSpin"
                    color="#fFFF"
                    height={20}
                    width={20}
                  />
                ) : (
                  <Button action={() => {}} text="Update" />
                )}
                <Link to="/user/dashboard/">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      ) : Error ? (
        <NetworkError fetchPost={fetchPost} />
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
