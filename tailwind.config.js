// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				lg: "10rem",
			},
		},
		extend: {
			colors: {
				primary: "#0ad4fa",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
