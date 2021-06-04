// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: {
				lg: "10rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
