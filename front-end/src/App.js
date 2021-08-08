import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";
// import { useState, useEffect } from "react";
// import "./app.css";

//components
import NavBar from "./Components/NavBar";

//pages
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

// import { apiURL } from "./util/apiURL.js";
// const API = apiURL();

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/products">
					<Index />
				</Route>
				<Route exact path="/products/new">
					<New />
				</Route>
				<Route exact path="/products/:id">
					<Show />
				</Route>
				<Route exact path="/products/:id/edit">
					<Edit />
				</Route>
			</Switch>
			<h1 className="title">Welcome to the Pop-Up Shop</h1>
		</div>
	);
}

export default App;
