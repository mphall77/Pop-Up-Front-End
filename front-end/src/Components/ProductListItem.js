import { Link } from "react-router-dom";

const ProductListItem = ({ product }) => {
	return (
		<tr>
			<td>
				<Link to={`/products/${product.id}`} target="_blank" rel="noreferrer">
					{product.name}
				</Link>
			</td>
			<td>{product.photo}</td>
			<td>{product.description}</td>
			<td>${product.price}</td>
		</tr>
	);
};

export default ProductListItem;
