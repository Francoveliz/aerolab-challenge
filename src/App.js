import {
	Navbar,
	Header,
	ProductCard,
	Filters,
	AddPoints,
} from "./components";
import { useAppContext } from "./context/context";

function App() {
	const { displayProducts } = useAppContext();
	return (
		<div className=" text-gray-600">
			<Navbar />
			<Header />
			<div className="container py-20">
				<Filters />
				<div className="grid lg:grid-cols-4 gap-5 py-10">
					{displayProducts.map(product => (
						<ProductCard {...product} key={product._id} />
					))}
				</div>
				<AddPoints />
			</div>
		</div>
	);
}

export default App;
