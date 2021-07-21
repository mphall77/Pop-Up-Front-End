import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/products/new">Add New Product</Link>
            </h1>
        </nav>
    )
}