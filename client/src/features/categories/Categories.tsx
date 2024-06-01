import Icon from "./DynamicIcon";
import { useGetCategoriesQuery } from "./categoryApiSlice";

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
			<section>
				<h2 className="my-3 text-4xl">Browse By Category</h2>
				<div className="flex items-center justify-between space-x-3">
					{data.map((category) => (
						<div
							className="flex flex-col items-center w-40 h-32 p-4 border-2 rounded-lg"
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
			</section>
		);
	}

	return <></>;
};
