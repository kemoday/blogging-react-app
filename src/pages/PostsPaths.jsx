import React from "react";
import { Route, Switch } from "react-router-dom";
import AddPost from "./AddPost";
import PageNotFound from "./components/PageNotFound";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import PostsPage from "./PostsPage";
import SinglePost from "./SinglePost";

export default function PostsPaths() {
  return (
    <Switch>
      <PrivateRoute path="/posts/add" component={AddPost} />
      <Route path="/posts/:id" component={SinglePost} />
      <Route path="/posts/" component={PostsPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
