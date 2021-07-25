import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Form, Col, Button, Row } from "react-bootstrap";
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
		<section class="card">
			<form onSubmit={handleSubmit}>
				<Form.Group as={Row} className="mb-3" controlId="formHorizontalProduct">
					<Form.Label column sm={2}>
						Product
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							id="name"
							value={product.name}
							onChange={handleTextChange}
							placeholder="Name of item"
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoto">
					<Form.Label column sm={2}>
						Photo
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							id="photo"
							value={product.photo}
							onChange={handleTextChange}
							placeholder="Image of item"
						/>
					</Col>
				</Form.Group>
				<Form.Group
					as={Row}
					className="mb-3"
					controlId="formHorizontalDescription"
				>
					<Form.Label column sm={2}>
						Description
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							id="description"
							value={product.description}
							onChange={handleTextChange}
							placeholder="Description of item"
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="mb-3" controlId="formHorizontalPrice">
					<Form.Label column sm={2}>
						Price
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="number"
							id="price"
							value={product.price}
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
				<div class="btn-group me-2" role="group" aria-label="First group">
					<Form.Group as={Row} className="mb-3">
						<Col sm={{ span: 10, offset: 10 }}>
							<Button type="submit">Submit</Button>
						</Col>
					</Form.Group>
				</div>
				<div class="btn-group me-2" role="group" aria-label="Second group">
					<Form.Group as={Row} className="mb-3">
						<Col sm={{ span: 10, offset: 11 }}>
							<Button type="submit">Back</Button>
						</Col>
					</Form.Group>
				</div>
			</form>
		</section>
	);
};

export default withRouter(ProductNewForm);
