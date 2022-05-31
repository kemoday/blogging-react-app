import React, { useEffect } from "react";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import PostsPaths from "./pages/PostsPaths";
import UserPaths from "./pages/UserPaths";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/components/PageNotFound";
import Sidebar from "./pages/components/Sidebar";
import { useState } from "react";
import { userInfo } from "./apis/users";
import { UserContext } from "./context/UserContextProvider";
import { useContext } from "react";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { setUser, user } = useContext(UserContext);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await userInfo();
        if (user !== "you are not sigen in.") {
          setUser(user);
        } else setUser(null);
      } catch (error) {
        user && setUser(null);
      }
    };
    getUserData();
  }, [setUser]);

  return (
    <Router>
      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
      <NavBar toggleSidebar={toggleSidebar} />
      <Switch>
        <Route path="/posts" component={PostsPaths} />;
        <Route path="/user" component={UserPaths} />
        <Route exact path="/blogging-react-app/" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
