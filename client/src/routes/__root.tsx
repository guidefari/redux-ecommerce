import { NavBar } from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="flex flex-col">
				<NavBar />
				<main className="w-full h-full flex-1 font-inter ">
					<Outlet />
				</main>
			</div>
			<TanStackRouterDevtools />
			<Toaster />
		</>
	),
});
