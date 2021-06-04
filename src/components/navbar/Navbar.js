import React from "react";
import { Logo, Coin } from "../../assets/svgs";
import { useAppContext } from "../../context/context";

const Navbar = () => {
	const { user } = useAppContext();
	const { name, points } = user;

	return (
		<nav className="py-3 ">
			<div className="flex justify-between items-center container gap-5 ">
				<div className="flex-grow">
					<Logo className=" ml-0 mr-auto" />
				</div>
				<p>{name}</p>
				<div className="bg-gray-200 flex items-center px-4 py-1 gap-1 rounded-2xl">
					<p className="text-lg">{points}</p>
					<Coin className="-mb-1 " />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
