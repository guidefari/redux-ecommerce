import { NavBar } from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="flex flex-col">
				<NavBar />
				<main className="w-full h-full flex-1 font-inter ">
					<Outlet />
				</main>
			</div>
			<Toaster />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</>
	),
});

const TanStackRouterDevtools =
	process.env.NODE_ENV === "production"
		? () => null // Render nothing in production
		: lazy(() =>
				// Lazy load in development
				import("@tanstack/router-devtools").then((res) => ({
					default: res.TanStackRouterDevtools,
					// For Embedded Mode
					// default: res.TanStackRouterDevtoolsPanel
				})),
			);
