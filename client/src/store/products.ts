import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Category } from "@shared/types";

export const productsApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1212/" }),
	reducerPath: "productsApi",
	// Tag types are used for caching and invalidation.
	tagTypes: ["Products", "Categories", "SingleCategory"],
	endpoints: (build) => ({
		getCategories: build.query<Category[], void>({
			query: () => "categories",
		}),
		getCategory: build.query<Category, Category["id"]>({
			query: (id) => ({ url: `category/${id}` }),
			providesTags: (result) => [
				{ type: "SingleCategory", id: String(result?.id) },
			],
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCategoryQuery,
	useLazyGetCategoryQuery,
} = productsApiSlice;
