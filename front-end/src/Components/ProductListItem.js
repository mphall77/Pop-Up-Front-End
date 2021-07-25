import { Link } from "react-router-dom";

const ProductListItem = ({ product }) => {
	return (
		<div class="col">
			<div class="card">
				<div className="card-parent">
					<Link to={`/products/${product.id}`} target="_blank" rel="noreferrer">
						<img
							src={product.photo}
							class="card-img-top product-img"
							alt="card-group"
						/>
					</Link>
				</div>
				<div class="card-body product-desc">
					<h5 class="card-title">{product.name}</h5>
					<p class="card-text">{product.description} </p>
				</div>
				<div class="card-footer">
					<small class="text-muted"> ${product.price}</small>
				</div>
			</div>
		</div>
	);
};

export default ProductListItem;
