import { Section } from "../../components/Section";
import { useGetCategoriesQuery } from "./categoryApiSlice";
import Icon from "./components/DynamicIcon";

export const Categories = () => {
	const { data, isError, isLoading, isSuccess, error } =
		useGetCategoriesQuery();
	console.log("data:", data);

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
						<div
							className="flex flex-col items-center justify-center h-32 p-4 transition-transform bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 hover:scale-105"
							key={category.id}
						>
							<Icon
								className="w-10 h-full text-gray-800 aspect-square"
								id={category.id}
							/>
							<p className="text-xs text-center">{category.name}</p>
						</div>
					))}
				</div>
			</Section>
		);
	}

	return <></>;
};
