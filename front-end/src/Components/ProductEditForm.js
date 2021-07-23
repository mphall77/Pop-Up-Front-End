import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const ProductEditForm = () => {
	const { id } = useParams();
	let history = useHistory();

	const [selectedProduct, setSelectedProduct] = useState({
		name: "",
		photo: "",
		description: "",
		price: "",
	});

	const handleTextChange = (e) => {
		setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedProduct = await updateProduct(selectedProduct, id);
		history.push(`/products/${id}`);
	};

	const updateProduct = async (productToEdit, id) => {
		try {
			await axios.put(`${API}/products/${id}`, productToEdit);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchProductToEdit = async () => {
		try {
			const res = await axios.get(`${API}/products/${id}`);
			setSelectedProduct(res.data.payload);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchProductToEdit();
	}, [id]);

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<label>
					Product:
					<input
						type="text"
						name="name"
						value={selectedProduct.name}
						onChange={handleTextChange}
					/>
				</label>
				<label>
					Photo:
					<input
						type="text"
						name="photo"
						value={selectedProduct.photo}
						onChange={handleTextChange}
					/>
				</label>
				<label>
					Description:
					<input
						type="text"
						name="description"
						value={selectedProduct.description}
						onChange={handleTextChange}
						placeholder="Album"
					/>
				</label>
				<label>
					Price:
					<input
						type="number"
						name="price"
						value={selectedProduct.price}
						onChange={handleTextChange}
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

export default ProductEditForm;
