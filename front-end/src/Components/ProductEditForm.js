import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory, withRouter, Link } from "react-router-dom";
import { Form, Col, Button, Row } from "react-bootstrap";
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

	useEffect(() => {
		const fetchProductToEdit = async () => {
			try {
				const res = await axios.get(`${API}/products/${id}`);
				setSelectedProduct(res.data.payload);
			} catch (err) {
				console.log(err);
			}
		};
		fetchProductToEdit();
	}, [id, history, API]);

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<Form.Group as={Row} className="mb-3">
					<Form.Label htmlFor="name" column sm={2}>
						Product
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							id="name"
							value={selectedProduct.name}
							onChange={handleTextChange}
							placeholder="Name of item"
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3">
					<Form.Label htmlFor="photo" column sm={2}>
						Photo
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							id="photo"
							value={selectedProduct.photo}
							onChange={handleTextChange}
							placeholder="Image of item"
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3">
					<Form.Label htmlFor="description" column sm={2}>
						Description
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							id="description"
							value={selectedProduct.description}
							onChange={handleTextChange}
							placeholder="Description of item"
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3">
					<Form.Label htmlFor="price" column sm={2}>
						Price
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="number"
							id="price"
							value={selectedProduct.price}
							onChange={handleTextChange}
							placeholder="2.22"
						/>
					</Col>
				</Form.Group>
				<div
					class="btn-toolbar"
					role="toolbar"
					aria-label="Toolbar with button groups"
				></div>
				<div class="btn-group me-2" role="group" aria-label="Second group">
					<Form.Group as={Row} className="mb-3">
						<Col sm={{ span: 10, offset: 11 }}>
							<Button>Back</Button>
						</Col>
					</Form.Group>
				</div>
				<div class="btn-group me-2" role="group" aria-label="First group">
					<Form.Group as={Row} className="mb-3">
						<Col sm={{ span: 10, offset: 10 }}>
							<Button type="submit">Submit</Button>
						</Col>
					</Form.Group>
				</div>
			</form>
		</section>
	);
};

export default withRouter(ProductEditForm);
