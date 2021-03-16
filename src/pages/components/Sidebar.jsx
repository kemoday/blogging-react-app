import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Sidebar.css";

export default function Sidebar({ toggleSidebar }) {
  return (
    <>
      <div className="shadow"></div>
      <div className="sidebar">
        <div className="content">
          <button onClick={toggleSidebar}>
            <li className="fa fa-plus"></li>
          </button>
          <ul className="x">
            <li>
              <NavLink
                exact
                onClick={toggleSidebar}
                className="item"
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="item"
                onClick={toggleSidebar}
                exact
                activeClassName="active"
                to="/post/"
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                className="item"
                onClick={toggleSidebar}
                activeClassName="active"
                to="/post/dashboard/"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebar}
                className="item"
                activeClassName="active"
                to="/post/add"
              >
                Add New
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
