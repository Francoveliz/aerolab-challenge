import React, { useEffect, useState } from "react";
import axios from "axios";
import { BuyWhite, BuyBlue, Coin } from "../../assets/svgs";
import { useAppContext } from "../../context/context";
import { Alert } from "../../components";

const ProductCard = ({ name, category, cost, img, _id }) => {
	const [isHover, setIsHover] = useState(false);
	const [insufficientPoints, setInsufficientPoints] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const { fetchUser, user } = useAppContext();
	const { points } = user;

	useEffect(() => {
		if (points - cost < 0) {
			setInsufficientPoints(true);
		} else {
			setInsufficientPoints(false);
		}
	}, [points]);

	const handleCloseAlert = () => {
		setTimeout(() => {
			setShowAlert(false);
		}, 4000);
	};

	const handleHover = () => {
		setIsHover(state => !state);
	};

	const handleReedem = async id => {
		try {
			await axios.post(
				"https://coding-challenge-api.aerolab.co/redeem",
				{ productId: id },
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDllZjQ1YjliNzc4MTAwMjA5YzVhOTciLCJpYXQiOjE2MjEwMjk5Nzl9.hG8OVZPXIjxg69oyFFGdHWHm7SGCzr4EfrRkGQOQgTg",
					},
				}
			);
			setShowAlert(true);
			fetchUser();
			handleCloseAlert();
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div
			className={`p-5 relative w-full shadow-md ${
				insufficientPoints ? "" : "cursor-pointer"
			} `}
			onMouseEnter={() => (insufficientPoints ? "" : setIsHover(true))}
			onMouseLeave={() => (insufficientPoints ? "" : setIsHover(false))}>
			<div>
				<img
					src={img.url}
					alt={name}
					className="object-contain m-auto px-5"
				/>
				<div className="border-t border-opacity-5	 h-0 mt-1 mb-4" />
				<p className="text-gray-400">{category}</p>
				<p>{name}</p>
				<div className="absolute top-2 right-2 ">
					{insufficientPoints ? (
						<div className="flex items-center gap-1 rounded-full bg-gray-600 py-2 px-3 text-white text-sm opacity-80">
							<p>{`You need ${cost - points}`}</p>
							<Coin className="-mb-1 -mr-1 w-6 h-6 " />
						</div>
					) : (
						<BuyWhite className="w-8 h-8" />
					)}
				</div>
			</div>
			{isHover &&
				(insufficientPoints ? (
					""
				) : (
					<div>
						<div className="bg-blue-400 w-full h-full absolute inset-0 opacity-90" />
						<div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-6">
							<div className="flex items-center gap-2">
								<p className="text-white text-3xl">{cost}</p>
								<Coin className="-mb-1" />
							</div>
							<button
								className="bg-white py-1.5 rounded-full w-full "
								onClick={() => handleReedem(_id)}>
								Reedem now
							</button>
						</div>
						<button className="absolute top-2 right-2 w-8 h-8">
							<BuyBlue />
						</button>
					</div>
				))}
			{showAlert && (
				<Alert text="You've redeem the product successfully" />
			)}
		</div>
	);
};

export default ProductCard;
