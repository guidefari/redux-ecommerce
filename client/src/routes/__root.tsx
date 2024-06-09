import { NavBar } from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="w-full pt-16 overflow-hidden overflow-y-auto font-inter ">
        <NavBar />
        <Outlet />
      </main>
      <TanStackRouterDevtools />
      <Toaster />
    </>
  ),
});
