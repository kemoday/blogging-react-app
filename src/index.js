import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserContextProvider from "./context/UserContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
