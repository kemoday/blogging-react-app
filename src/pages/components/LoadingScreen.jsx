import React from "react";
import Loader from "react-loader-spinner";
import "./styles/LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <Loader type="Oval" color="#ff4a54" height={50} width={50} />
    </div>
  );
}
