import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));

export default {
	port: 1212,
	fetch: app.fetch,
};
