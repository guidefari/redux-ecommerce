import { Categories } from "@/features/categories";
import { FeaturedProcuts } from "@/features/featuredProducts";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<>
			<Categories />
			<FeaturedProcuts />
		</>
	);
}
