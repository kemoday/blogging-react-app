import { Link } from "react-router-dom";
import React from "react";
import "./styles/Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/"> BLOGGING </Link>
    </div>
  );
}
