import { Link } from "@tanstack/react-router";
import type { SVGProps } from "react";
import { CartModal } from "./CheckoutDialog";
import { Button } from "./ui/button";

export function NavBar() {
	return (
		<header className="sticky top-0 flex items-center justify-between w-full h-16 px-4 border-b bg-theme-dark md:px-6">
			<Link to="/">
				<button
					type="button"
					className="flex transition-colors hover:text-theme-highlight-secondary items-center gap-2"
				>
					<MountainIcon className="w-6 h-6" />
					<span className="text-lg font-semibold">Goosebumps Audio</span>
				</button>
			</Link>
			<div className="flex gap-4 items-center">
				<Link to="/products">
					<span className="flex transition-colors hover:text-theme-highlight-secondary font-semibold items-center gap-2">
						Products
					</span>
				</Link>
				<CartModal />
			</div>
		</header>
	);
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Beautiful logo of our brand.</title>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
