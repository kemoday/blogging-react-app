import React from "react";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import PostPath from "./pages/PostPaths";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/components/PageNotFound";
import Sidebar from "./pages/components/Sidebar";

class App extends React.Component {
  state = { showSidebar: false };
  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };
  render() {
    return (
      <Router>
        {this.state.showSidebar && (
          <Sidebar toggleSidebar={this.toggleSidebar} />
        )}
        <NavBar toggleSidebar={this.toggleSidebar} />
        <Switch>
          <Route path="/post" component={PostPath} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blogging-react-app/" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
