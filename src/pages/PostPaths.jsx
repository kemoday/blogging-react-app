import React from "react";
import { Route, Switch } from "react-router-dom";
import AddPost from "./AddPost/AddPost";
import PageNotFound from "./components/PageNotFound";
import EditPost from "./EditPost/EditPost";
import PostPage from "./PostPage/PostPage";
import SinglePost from "./SinglePost/SinglePost";

export default function PostPaths() {
  return (
    <Switch>
      <Route path="/post/edit/:id" component={EditPost} />
      <Route path="/post/add" component={AddPost} />
      <Route path="/post/:id" component={SinglePost} />
      <Route path="/post/" component={PostPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
