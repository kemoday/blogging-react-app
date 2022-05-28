import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import Logo from "./Logo";
import "./styles/NavBar.css";

export default function NavBar({ toggleSidebar }) {
  const { user } = useContext(UserContext);
  const authMenuItems = (
    <>
      <li>
        <NavLink
          className="item"
          activeClassName="active"
          to="/post/dashboard/"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="item" activeClassName="active" to="/post/add">
          Add New
        </NavLink>
      </li>
    </>
  );
  const noneAuthMenuItems = (
    <>
      <li>
        <NavLink className="item" activeClassName="active" to="/user/signin">
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink className="item" activeClassName="active" to="/user/signup">
          Sign Up
        </NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <Logo />
      <ul className="menu">
        <li>
          <NavLink exact className="item" activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="item" exact activeClassName="active" to="/post/">
            Posts
          </NavLink>
        </li>
        {user ? authMenuItems : noneAuthMenuItems}
      </ul>
      <button
        title="Currently this feature is not working."
        className="search-btn"
      >
        <li className="fa fa-search fa-1x"></li>
      </button>
      <div className="navBtn">
        <button onClick={toggleSidebar}>
          <li className="fa fa-bars fa-1x"></li>
        </button>
      </div>
    </nav>
  );
}
