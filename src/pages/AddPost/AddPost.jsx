import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/AddPost.css";
import Loader from "react-loader-spinner";
import Axios from "axios";
import Button from "../components/Button";

export default function AddPost({ history }) {
  document.title = "BLOGGING - Add new post";
  const [loading, setLoading] = useState(false);

  const handleNewPost = (event) => {
    setLoading(true);
    event.preventDefault();
    const post = {
      title: event.target.title.value,
      content: event.target.content.value,
      summary: event.target.summary.value,
      views: 0,
    };

    Axios.post("https://blogging-backand.herokuapp.com/post/", post)
      .then((res) => {
        event.target.title.value = "";
        event.target.content.value = "";
        event.target.summary.value = "";
        history.push("/post/dashboard/");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("NetWork Error,please try again");
      });
  };
  return (
    <div className="add-new-post">
      <div className="form-wrapper">
        <h1>Add new post</h1>
        <hr />
        <form onSubmit={handleNewPost}>
          <label htmlFor="title">Post Title</label>
          <input required maxLength={60} type="text" name="title" id="title" />
          <label htmlFor="content">Post Content</label>
          <textarea required rows="8" type="text" name="content" id="content" />
          <label htmlFor="summary">Post summary</label>
          <textarea
            maxLength={256}
            required
            rows="3"
            name="summary"
            id="summary"
          />
          <div className="publish-btns">
            {loading ? (
              <Loader type="TailSpin" color="#fFFF" height={20} width={20} />
            ) : (
              <Button action={() => {}} text="Publish" />
            )}
            <Link to="/post/dashboard/">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
