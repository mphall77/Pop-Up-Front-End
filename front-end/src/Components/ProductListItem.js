import { Link } from "react-router-dom";

const ProductListItem = ({ product }) => {
	return (
		<div className="col">
			<div className="card">
				<div className="card-parent">
					<Link to={`/products/${product.id}`} rel="noreferrer">
						<img
							src={product.photo}
							className="card-img-top product-img"
							alt="card-group"
						/>
					</Link>
				</div>
				<div className="card-body product-desc">
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text">{product.description} </p>
				</div>
				<div className="card-footer">
					<small className="text-muted"> ${product.price}</small>
				</div>
			</div>
		</div>
	);
};

export default ProductListItem;
