import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Category } from "@shared/types";

export const categoriesApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1212/" }),
	reducerPath: "categoriesApi",
	// Tag types are used for caching and invalidation.
	tagTypes: ["Categories"],
	endpoints: (build) => ({
		getCategories: build.query<Category[], void>({
			query: () => "categories",
		}),
	}),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
