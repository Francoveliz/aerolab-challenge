import { Navbar, Header, ProductCard } from "./components";
import { products } from "./assets/utils";

function App() {
	return (
		<div className="py-20 text-gray-600">
			<Navbar />
			<Header />
			<div className="container grid lg:grid-cols-4 gap-5">
				{products.map(product => (
					<ProductCard {...product} />
				))}
			</div>
		</div>
	);
}

export default App;
