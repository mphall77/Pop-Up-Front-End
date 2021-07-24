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
		  console.log(err)
		}
	  };

	useEffect(() => {
		fetchProduct();
	}, [id]);

	

	  const handleDelete = () => {
		deleteProduct();
		history.push('/products')
		
	  } 

	const editProductURL = `/products/${id}/edit`;

	return (
		<div>
			<section>
				<p>{product.name}</p>
				<p>{product.photo}</p>
				<p>{product.description}</p>
				<p>{product.price}</p>
			</section>
			<Link to={`/products`}>
				<button>Back</button>
			</Link>
			<Link to={editProductURL}>
				<button>Edit</button>
			</Link>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};

export default ProductDetails;
