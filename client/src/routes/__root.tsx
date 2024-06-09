import { NavBar } from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <main className="w-full overflow-hidden overflow-y-auto font-inter ">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
      <Toaster />
    </>
  ),
});
