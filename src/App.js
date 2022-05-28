import React, { useEffect } from "react";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import PostPaths from "./pages/PostPaths";
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

  const { setUser } = useContext(UserContext);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await userInfo();
        setUser(user);
      } catch (error) {}
    };
    getUserData();
  }, [setUser]);

  return (
    <Router>
      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
      <NavBar toggleSidebar={toggleSidebar} />
      <Switch>
        <Route path="/post" component={PostPaths} />
        <Route path="/user" component={UserPaths} />
        <Route exact path="/blogging-react-app/" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
