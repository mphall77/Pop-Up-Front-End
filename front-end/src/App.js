import { Switch, Route } from "react-router-dom";

//components
import NavBar from "./Components/NavBar";

//pages
import Home from "./Pages/Home";

import axios from "axios";
import { useState, useEffect } from "react";

// import { apiURL } from "./util/apiURL.js";
// const API = apiURL();
import "./app.css";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
