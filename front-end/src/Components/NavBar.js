import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Row } from "react-bootstrap";

export default function NavBar() {
	return (
		<h2>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>PopUpShop</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/products">Products</Nav.Link>
						<Nav.Link href="/products/new">Add New Product</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</h2>
	);
}
