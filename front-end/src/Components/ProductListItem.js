import { Link } from "react-router-dom";

const ProductListItem = ({ product }) => {
	return (
		<div class="col">
			<div class="card">
				<img src={product.photo} class="card-img-top" alt="card-group-image" />
				<div class="card-body">
					<h5 class="card-title">{product.name}</h5>
					<p class="card-text">{product.description} </p>
				</div>
				<div class="card-footer">
					<small class="text-muted"> {product.price}</small>
				</div>
			</div>
		</div>
	);
};

export default ProductListItem;

{
	/* <tr>
      <td>
        <Link to={`/products/${product.id}`} target="_blank" rel="noreferrer">
          {product.name}
        </Link>
      </td>
      <td>
        <img src={product.photo} alt="sneakers" class="img-thumbnail" />
      </td>
      <td>{product.description}</td>
      <td>${product.price}</td>
    </tr> */
}
