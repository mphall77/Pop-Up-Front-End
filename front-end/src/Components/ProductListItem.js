import { Link } from "react-router-dom";

const ProductListItem = ({ product }) => {
	return (
		<tr>
			<td>
				<Link to={`/products/${product.id}`} target="_blank" rel="noreferrer">
					{product.name}
				</Link>
			</td>
			<td>
				<Link to={`/products/${product.id}`} target="_blank" rel="noreferrer">
					{product.photo}
				</Link>
			</td>
			<td>
				<Link to={`/products/${product.id}`} target="_blank" rel="noreferrer">
					{product.description}
				</Link>
			</td>
			<td>
				<Link to={`/products/${product.id}`} target="_blank" rel="noreferrer">
					{product.price}
				</Link>
			</td>
		</tr>
	);
};

export default ProductListItem;
