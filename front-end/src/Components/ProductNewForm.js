import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL.js";
const API = apiURL();

const ProductNewForm = () => {
	let history = useHistory();

	const [product, setProduct] = useState({
		name: "",
		photo: "",
		description: "",
		price: 0,
	});

	const addProduct = async (newProduct) => {
		try {
			await axios.post(`${API}/products`, newProduct);
			history.push(`/products`);
		} catch (err) {
			console.log(err);
		}
	};

	const handleTextChange = (e) => {
		setProduct({ ...product, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addProduct(product);
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<label>
					Product:
					<input
						type="text"
						id="name"
						name="name"
						value={product.name}
						onChange={handleTextChange}
						placeholder="Name of item"
					/>
				</label>
				<label>
					Photo:
					<input
						type="text"
						id="photo"
						name="photo"
						value={product.photo}
						onChange={handleTextChange}
						placeholder="Image of item"
					/>
				</label>
				<label>
					Description:
					<textarea
						type="text"
						id="description"
						name="description"
						value={product.description}
						onChange={handleTextChange}
						placeholder="Description of item"
					/>
				</label>
				<label>
					Price:
					<input
						type="number"
						id="price"
						name="price"
						value={product.price}
						onChange={handleTextChange}
						placeholder="2.22"
						required
					/>
				</label>

				<div>
					<button>Submit</button>
				</div>
			</form>
			<button>Back</button>
		</section>
	);
};

export default withRouter(ProductNewForm);
