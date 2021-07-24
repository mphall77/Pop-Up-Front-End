import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const ProductDetails = () => {
	const [product, setProduct] = useState({});
	let { id } = useParams();
	let history = useHistory();

	const fetchProduct = async () => {
		try {
			const res = await axios.get(`${API}/products/${id}`);

			setProduct(res.data.payload);
		} catch (err) {
			console.log(err);
		}
	};
	const deleteProduct = async () => {
		try {
			await axios.delete(`${API}/products/${id}`);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchProduct();
	}, [id]);

	const handleDelete = () => {
		deleteProduct();
		history.push("/products");
	};

	const editProductURL = `/products/${id}/edit`;

	return (
		<>
			<div class="row row-cols-1 row-cols-sm-2 g-3">
				<div class="col">
					<div class="card">
						<div class="card-header">header</div>
						<div class="card-body">
							<h5 class="card-title">{product.name}</h5>
							<img src={product.photo} /> 
							{/* <p>{product.photo}</p> */}
							<p class="card-text">{product.description}</p>
						</div>
						<div class="card-footer text-muted">${product.price}</div>

						{/* BUTTONS */}
						<div
							class="btn-toolbar"
							role="toolbar"
							aria-label="Toolbar with button groups"
						>
							<div class="btn-group me-2" role="group" aria-label="First group">
								<Link to={editProductURL}>
									<button type="button" class="btn btn-primary">
										Edit
									</button>
								</Link>
							</div>
							<div
								class="btn-group me-2"
								role="group"
								aria-label="Second group"
							>
								<Link to={`/products`}>
									<button type="button" class="btn btn-primary">
										Back
									</button>
								</Link>
							</div>
							<div class="btn-group" role="group" aria-label="Third group">
								<button
									onClick={handleDelete}
									type="button"
									class="btn btn-primary"
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
