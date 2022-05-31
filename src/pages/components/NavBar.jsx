import React from "react";
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { signout } from "../../apis/users";
import { UserContext } from "../../context/UserContextProvider";
import Logo from "./Logo";
import "./styles/NavBar.css";

export default function NavBar({ toggleSidebar }) {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const authMenuItems = (
    <>
      <li>
        <NavLink
          className="item"
          activeClassName="active"
          to={`/user/dashboard/`}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="item" activeClassName="active" to="/posts/add">
          Add New
        </NavLink>
      </li>
      <li>
        <button
          onClick={() => {
            signout().then(() => {
              setUser(null);
              history.push("/user/signin");
            });
          }}
          className="item"
        >
          Signout
        </button>
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
          <NavLink className="item" exact activeClassName="active" to="/posts/">
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
