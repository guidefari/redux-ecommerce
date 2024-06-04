import { ProductCard } from "@/components/ProductCard";
import { writeToLocalStorage } from "@/services/clientStorage";
import { Section } from "../../components/Section";
import {
	useGetFeaturedProductsQuery,
	useLazyGetCategoryQuery,
} from "../../store/products";

export const FeaturedProcuts = () => {
	const { data, isError, isLoading, isSuccess, error } =
		useGetFeaturedProductsQuery();
	const [
		trigger,
		{
			error: singleCategoryError,
			isError: isSingleCategoryError,
			data: category,
		},
		lastPromiseInfo,
	] = useLazyGetCategoryQuery();

	if (isError) {
		console.log({ error });
		return (
			<div>
				<h1>There was an error!!!</h1>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (isSuccess) {
		for (const product of data) {
			writeToLocalStorage({
				tableName: "products",
				id: product.id,
				data: product,
			});
		}

		return (
			<Section title="Featured Products">
				<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 md:p-6">
					{data.map((product) => (
						<ProductCard
							description={product.description}
							images={product.images}
							name={product.name}
							price={product.price}
							key={product.id}
							id={product.id}
						/>
					))}
				</div>
			</Section>
		);
	}

	return <></>;
};
