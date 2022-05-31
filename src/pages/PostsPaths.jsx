import React from "react";
import { Route, Switch } from "react-router-dom";
import PostsContextProvider from "../context/PostsContextProvider";
import AddPost from "./AddPost/AddPost";
import PageNotFound from "./components/PageNotFound";
import EditPost from "./EditPost/EditPost";
import PostsPage from "./PostsPage";
import SinglePost from "./SinglePost";

export default function PostsPaths() {
  return (
    <PostsContextProvider>
      <Switch>
        <Route path="/posts/edit/:id" component={EditPost} />
        <Route path="/posts/add" component={AddPost} />
        <Route path="/posts/:id" component={SinglePost} />
        <Route path="/posts/" component={PostsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </PostsContextProvider>
  );
}
