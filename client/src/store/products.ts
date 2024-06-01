import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Category, Product, ProductResponse } from "@shared/types";

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
		getProducts: build.query<Product[], void>({
			query: () => "products",
		}),
		getFeaturedProducts: build.query<Product[], void>({
			query: () => "products?featured=true",
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCategoryQuery,
	useLazyGetCategoryQuery,
	useGetProductsQuery,
	useGetFeaturedProductsQuery,
} = productsApiSlice;
