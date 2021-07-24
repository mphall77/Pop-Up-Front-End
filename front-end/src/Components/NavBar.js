import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<h1>
				<Link to="/products/new">
					<button type="button" class="btn btn-primary">
						Add New Product
					</button>
				</Link>
			</h1>
		</nav>
	);
}
