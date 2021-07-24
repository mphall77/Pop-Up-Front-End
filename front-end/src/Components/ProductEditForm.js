import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const ProductEditForm = () => {
	const API = apiURL();
	const { id } = useParams();
	let history = useHistory();

	const [selectedProduct, setSelectedProduct] = useState({
		name: "",
		photo: "",
		description: "",
		price: "",
	});

	const handleTextChange = (e) => {
		setSelectedProduct({ ...selectedProduct, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		updateProduct(selectedProduct);
		history.push(`/products/${id}`);
	};

	const updateProduct = async (productToEdit) => {
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
	}, [id, history, API]);

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<label>
					Product:
					<input
						type="text"
						id="name"
						name="name"
						value={selectedProduct.name}
						onChange={handleTextChange}
					/>
				</label>
				<label>
					Photo:
					<input
						type="text"
						id="photo"
						name="photo"
						value={selectedProduct.photo}
						onChange={handleTextChange}
					/>
				</label>
				<label>
					Description:
					<input
						type="text"
						id="description"
						name="description"
						value={selectedProduct.description}
						onChange={handleTextChange}
						placeholder="description"
					/>
				</label>
				<label>
					Price:
					<input
						type="number"
						id="price"
						name="price"
						value={selectedProduct.price}
						onChange={handleTextChange}
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

export default withRouter(ProductEditForm);
