import { Grid, Paper, Typography } from "@mui/material";
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
			<>
				<Typography variant="h4" marginY={5} textAlign="left">
					Browse By Category
				</Typography>
				<Grid
					justifyContent="center"
					alignContent={"center"}
					container
					spacing={3}
				>
					{data.map((category) => (
						<Grid key={category.id} item>
							<Icon id={category.id} />
							<Paper>{category.name}</Paper>
						</Grid>
					))}
				</Grid>
			</>
		);
	}

	return <></>;
};
