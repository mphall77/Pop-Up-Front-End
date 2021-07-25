import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>Welcome to the Pop-Up Shop!</h1>
			<Link to="/products">
				<button type="button" class="btn btn-primary">
					Enter the Shop
				</button>
			</Link>
		</div>
	);
}
