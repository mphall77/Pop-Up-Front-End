import axios from "axios";
import { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const ProductsList = () => {
	const [products, setProducts] = useState([]);

	console.log("API", API);
	const fetchProducts = async () => {
		try {
			const res = await axios.get(`${API}/products`);
			setProducts(res.data.payload);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="row row-cols-1 row-cols-sm-2 g-3">
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</div>
	);
};

export default ProductsList;
