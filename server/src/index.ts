import { Hono } from "hono";
import { getProductById, products } from "../src/data/products";

const api = new Hono();

api.get("/products", (c) => c.json(products));
api.get("/product/:id", (c) => {
	const id = c.req.param("id");
	const product = getProductById(id);
	return c.json({ product });
});

export default {
	port: 1212,
	fetch: api.fetch,
};
