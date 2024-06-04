import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Category, Product, ProductResponse } from "@shared/types";

export const productsApiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
	reducerPath: "productsApi",
	// Tag types are used for caching and invalidation.
	tagTypes: ["Products", "Categories", "SingleCategory", "SingleProduct"],
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
		getProduct: build.query<Product, Product["id"]>({
			query: (id) => ({ url: `product/${id}` }),
			providesTags: (result) => [
				{ type: "SingleProduct", id: String(result?.id) },
			],
		}),
		getProducts: build.query<Product[], void>({
			query: () => "products",
		}),
		getFeaturedProducts: build.query<Product[], void>({
			query: () => "products?featured=true",
		}),
		getManyProducts: build.query<Product[], string[]>({
			query: (ids) => ({
				url: "products",
				body: {
					ids,
				},
			}),
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCategoryQuery,
	useLazyGetCategoryQuery,
	useGetProductsQuery,
	useGetFeaturedProductsQuery,
	useGetManyProductsQuery,
	useLazyGetManyProductsQuery,
	useLazyGetProductQuery,
	useGetProductQuery,
} = productsApiSlice;
