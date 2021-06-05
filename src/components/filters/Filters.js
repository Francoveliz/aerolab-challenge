import React from "react";
import { useAppContext } from "../../context/context";

const Filters = () => {
	const { setDisplayProducts, products, displayProducts } =
		useAppContext();

	const mostRecent = () => {
		setDisplayProducts(() => [...products]);
	};

	const lowestPrice = () => {
		setDisplayProducts(() =>
			[...displayProducts].sort((a, b) => a.cost - b.cost)
		);
	};

	const highestPrice = () => {
		setDisplayProducts(() =>
			[...displayProducts].sort((a, b) => b.cost - a.cost)
		);
	};

	const filters = [
		{
			name: "Most recent",
			action: mostRecent,
		},
		{
			name: "Lowest price",
			action: lowestPrice,
		},
		{
			name: "Highest price",
			action: highestPrice,
		},
	];

	return (
		<div className="flex gap-5 items-center text-gray-400 flex-wrap">
			<p>Sort by: </p>

			{filters.map(filter => (
				<Filter {...filter} />
			))}
		</div>
	);
};

const Filter = ({ name, action }) => {
	return (
		<button
			className="px-4 py-1.5  bg-gray-100 rounded-xl hover:bg-blue-400 hover:text-white"
			onClick={action}>
			{name}
		</button>
	);
};

export default Filters;
