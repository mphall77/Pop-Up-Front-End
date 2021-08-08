import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<h1>
				<Link to="/products/new">
					<div className="navbut">
					<button type="button" class="btn btn-outline-dark">
						Add New Product
					</button>
					</div>
				</Link>
			</h1>
		</nav>
	);
}
