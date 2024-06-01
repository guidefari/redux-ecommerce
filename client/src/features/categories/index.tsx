import { Section } from "../../components/Section";
import {
	useGetCategoriesQuery,
	useLazyGetCategoryQuery,
} from "../../store/products";
import Icon from "./components/DynamicIcon";

export const Categories = () => {
	const { data, isError, isLoading, isSuccess, error } =
		useGetCategoriesQuery();
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
		return (
			<Section title="Browse By Category">
				<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-5 md:p-6">
					{data.map((category) => (
						<button
							type="button"
							className="flex flex-col items-center justify-center h-32 p-4 transition-transform rounded-lg shadow-md shadow-violet-950 hover:scale-105"
							key={category.id}
							onClick={() => trigger(category.id)}
						>
							<Icon className="w-10 h-full aspect-square" id={category.id} />
							<p className="text-xs text-center">{category.name}</p>
						</button>
					))}
				</div>
			</Section>
		);
	}

	return <></>;
};
