import React, { useState } from "react";
import { BuyWhite, BuyBlue, Coin } from "../../assets/svgs";

const ProductCard = ({ name, category, cost, img, _id }) => {
	const [isHover, setIsHover] = useState(false);
	const handleHover = () => {
		setIsHover(state => !state);
	};

	return (
		<div
			className="p-5 relative w-full shadow-md cursor-pointer"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<div>
				<img
					src={img.url}
					alt={name}
					className="object-contain m-auto px-5"
				/>
				<div className="border-t border-opacity-5	 h-0 mt-1 mb-4" />
				<p className="text-gray-400">{category}</p>
				<p>{name}</p>
				<button className="absolute top-2 right-2 w-8 h-8">
					<BuyWhite />
				</button>
			</div>
			{isHover && (
				<div>
					<div className="bg-blue-400 w-full h-full absolute inset-0 opacity-90" />
					<div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-6">
						<div className="flex items-center gap-2">
							<p className="text-white text-3xl">{cost}</p>
							<Coin className="-mb-1" />
						</div>
						<button className="bg-white py-1.5 rounded-full w-full ">
							Reedem now
						</button>
					</div>
					<button className="absolute top-2 right-2 w-8 h-8">
						<BuyBlue />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProductCard;
