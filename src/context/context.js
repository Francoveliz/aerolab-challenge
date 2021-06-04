import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [user, setUser] = useState({});

	const fetchData = async endPoint => {
		const response = await axios.get(endPoint, {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDllZjQ1YjliNzc4MTAwMjA5YzVhOTciLCJpYXQiOjE2MjEwMjk5Nzl9.hG8OVZPXIjxg69oyFFGdHWHm7SGCzr4EfrRkGQOQgTg",
			},
		});
		return response;
	};

	const fetchProducts = async () => {
		const response = await fetchData(
			"https://coding-challenge-api.aerolab.co/products"
		);
		setProducts(response.data);
		setDisplayProducts(response.data);
		console.log("fetchProducts function");
	};

	const fetchUser = async () => {
		const response = await fetchData(
			"https://coding-challenge-api.aerolab.co/user/me"
		);
		setUser(response.data);
	};

	useEffect(() => {
		fetchProducts();
		fetchUser();
	}, []);

	return (
		<Context.Provider
			value={{
				products,
				user,
				fetchUser,
				displayProducts,
				setDisplayProducts,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useAppContext = () => {
	return useContext(Context);
};
