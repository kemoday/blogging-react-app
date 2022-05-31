import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Post.css";

export default function Post({ postData }) {
  return (
    <div>
      <div className="post">
        <h2>{postData.title}</h2>
        <p>{postData.summary}</p>
        <Link to={`/posts/${postData._id}`}>More..</Link>
      </div>
    </div>
  );
}
