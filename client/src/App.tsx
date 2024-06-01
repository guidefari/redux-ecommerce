import { Categories } from "./features/categories";
import { FeaturedProcuts } from "./features/featuredProducts";

const App = () => {
	return (
		<main className="container min-h-screen mx-auto overflow-hidden overflow-y-auto font-inter ">
			<Categories />
			<FeaturedProcuts />
		</main>
	);
};

export default App;
