import React from "react";
import Loader from "react-loader-spinner";
import "./styles/SmallLoading.css";

export default function SmallLoading() {
  return (
    <div className="small-loading">
      <Loader type="Oval" color="#ff4a54" height={50} width={50} />
    </div>
  );
}
