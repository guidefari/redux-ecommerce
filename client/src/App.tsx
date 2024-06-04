import { NavBar } from "./components/NavBar";
import { Toaster } from "./components/ui/toaster";
import { Categories } from "./features/categories";
import { FeaturedProcuts } from "./features/featuredProducts";

const App = () => {
	return (
		<>
			<NavBar />
			<main className="container min-h-screen mx-auto overflow-hidden overflow-y-auto font-inter ">
				<Categories />
				<FeaturedProcuts />
			</main>
			<Toaster />
		</>
	);
};

export default App;
