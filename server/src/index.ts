import { getIntersectionByField } from "@shared/util";
import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { categories } from "../src/data/categories";
import {
	getDiscountedProducts,
	getFeaturedProducts,
	getManyProducts,
	getProductById,
	products,
} from "../src/data/products";

const api = new Hono();
// api.use(
// 	"/*",
// 	cors({
// 		origin: ["https://d27ipf1vpwmgeh.cloudfront.net"],
// 		allowMethods: ["GET", "POST"],
// 	}),
// );
api.use(logger());

api.get("/products", (c) => {
	const { featured, discounted } = c.req.query();

	if (featured && discounted) {
		const featuredProducts = getFeaturedProducts();
		const discountedProducts = getDiscountedProducts();

		const combinedProducts = getIntersectionByField(
			featuredProducts,
			discountedProducts,
			"id",
		);
		return c.json(combinedProducts);
	}

	if (featured) {
		return c.json(getFeaturedProducts());
	}

	if (discounted) {
		return c.json(getDiscountedProducts());
	}

	return c.json(products);
});
api.get("/products/featured", (c) => c.json(getFeaturedProducts()));
api.get("/product/:id", (c) => {
	const id = c.req.param("id");
	const product = getProductById(id);
	return c.json({ product });
});

api.get("/categories", (c) => c.json(categories));

api.get("/category/:id", (c) => {
	const id = c.req.param("id");
	const category = categories.find((c) => c.id === id);

	if (!category) {
		return c.json({ message: "Category not found" }, 404);
	}

	const products = getManyProducts(category.products);
	return c.json(products || []);
});

export default {
	port: 1212,
	fetch: api.fetch,
};

export const handler = handle(api);
