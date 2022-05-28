import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import "./styles/Sidebar.css";

export default function Sidebar({ toggleSidebar }) {
  const { user } = useContext(UserContext);
  const authMenuItems = (
    <>
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
    </>
  );
  const noneAuthMenuItems = (
    <>
      <li>
        <NavLink
          className="item"
          onClick={toggleSidebar}
          activeClassName="active"
          to="user/signin"
        >
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink
          className="item"
          onClick={toggleSidebar}
          activeClassName="active"
          to="user/signup"
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="shadow" onClick={toggleSidebar}></div>
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
                className="item py-4"
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
            {user ? authMenuItems : noneAuthMenuItems}
          </ul>
        </div>
      </div>
    </>
  );
}
