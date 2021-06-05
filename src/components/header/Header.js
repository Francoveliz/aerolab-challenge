import React from "react";
import headerImg from "../../assets/images/header-x1.png";

const Header = () => {
	return (
		<div className="relative">
			<img
				className="w-full max-w-7xl mx-auto z-0"
				src={headerImg}
				alt="auriculares"
			/>
			<div className="container">
				<h1 className="z-50 absolute bottom-0 mb-10 text-5xl text-white font-bold">
					Electronics
				</h1>
			</div>
		</div>
	);
};

export default Header;
