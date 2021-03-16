import React from "react";
import Button from "./Button";
import "./styles/NetworkError.css";
export default function NetworkError(props) {
  document.title = "BLOGGING - Network or Server Error";

  return (
    <div>
      <div className="loading-screen offline">
        <span className="fa fa-wifi"></span>
        <h2>Network or Server Error</h2>
        <p>
          It doesn't look like you're connected to the internet <br />
          or there are a server error.
        </p>
        <Button text="Reload" action={props.fetchPost} />
      </div>
    </div>
  );
}
