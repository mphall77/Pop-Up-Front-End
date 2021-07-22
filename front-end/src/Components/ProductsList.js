import axios from "axios";
import { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const ProductsList = () => {
	const [products, setProducts] = useState([]);

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
		<div>
			<section>
				<table class="table table-striped">
					<thead scope="row">
						<tr>
							<th>Name</th>
							<th>Photo</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody scope="row">
						{products.map((product) => {
							return <ProductListItem key={product.id} product={product} />;
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default ProductsList;
