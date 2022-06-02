import React from "react";
import { Link } from "react-router-dom";
import "./styles/NetworkError.css";
export default function NoPostFound(props) {
  document.title = "BLOGGING - No Post Found!";

  return (
    <div>
      <div className="loading-screen offline">
        <span className="fa fa-search"></span>
        <h2>No Post Found!</h2>
        <Link className="primary-button" to="/posts/add/">
          <li className="fa fa-pluse"></li> Add New Post
        </Link>
      </div>
    </div>
  );
}
