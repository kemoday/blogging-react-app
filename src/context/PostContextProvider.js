import React, { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [post, setPost] = useState(null);
  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;
