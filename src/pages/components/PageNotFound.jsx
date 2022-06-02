import React from "react";
import { Link } from "react-router-dom";
import "./styles/NetworkError.css";
export default function PageNotFound(props) {
  document.title = "BLOGGING - Page not Found!";
  return (
    <div>
      <div className="loading-screen offline">
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <Link className="primary-button" to="/posts/">
          <li className="fa fa-pluse"></li> Go Posts Page
        </Link>
      </div>
    </div>
  );
}
