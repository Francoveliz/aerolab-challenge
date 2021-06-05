import React from "react";
import { Check } from "../../assets/svgs";

const Alert = ({ text }) => {
	return (
		<div
			className="flex items-center bg-green-400 text-white text-sm font-bold px-4 py-3 fixed w-max rounded inset-x-0 mx-auto  bottom-3 gap-4 z-50"
			role="alert">
			<div className="w-4">
				<Check />
			</div>
			<p>{text}</p>
		</div>
	);
};

export default Alert;
