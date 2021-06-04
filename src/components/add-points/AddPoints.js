import React from "react";
import axios from "axios";
import { useAppContext } from "../../context/context";

const AddPoints = () => {
	const { fetchUser } = useAppContext();
	const addPoints = async () => {
		try {
			const post = await axios.post(
				"https://coding-challenge-api.aerolab.co/user/points",
				{ amount: 1000 },
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDllZjQ1YjliNzc4MTAwMjA5YzVhOTciLCJpYXQiOjE2MjEwMjk5Nzl9.hG8OVZPXIjxg69oyFFGdHWHm7SGCzr4EfrRkGQOQgTg",
					},
				}
			);
			fetchUser();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<button
			onClick={addPoints}
			className="fixed bottom-5 right-5 bg-blue-400 px-4 py-2 rounded-full text-white">
			Add points
		</button>
	);
};

export default AddPoints;
