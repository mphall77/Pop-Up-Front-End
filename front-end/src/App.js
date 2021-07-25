import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import NavBar from "./Components/NavBar";

//pages
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

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
		</div>
	);
}

export default App;
