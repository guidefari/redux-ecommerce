/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "server",
			removal: input?.stage === "production" ? "retain" : "remove",
			home: "aws",
		};
	},
	async run() {
		const hono = new sst.aws.Function("Hono", {
			url: true,
			handler: "server/src/index.handler",
		});

		const web = new sst.aws.StaticSite("ViteEcommerce", {
			path: "client/",
			build: {
				command: "bun run build",
				output: "dist",
			},
			environment: {
				VITE_API_BASE_URL: hono.url,
			},
		});

		return {
			api: hono.url,
			web: web.url,
		};
	},
});
