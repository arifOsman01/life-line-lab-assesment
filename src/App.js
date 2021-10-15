import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./card";
import Modal from "./modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FriendApp from "./friend-app";
import Login from "./login";

const App = () => {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <div className="App">
        <Login setToken={setToken} />
      </div>
    );
  }
  console.log("token", token);
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Switch>
          <Route>
            <Login />
          </Route>
          <Route path="/main"> */}
      <FriendApp />
      {/* </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
