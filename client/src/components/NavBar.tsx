import { Badge } from "@/components/ui/badge";
import { selectCartQuantity } from "@/store/cart";
import { useAppSelector } from "@/store/hooks";
import type { SVGProps } from "react";

export function NavBar() {
	const cartCount = useAppSelector(selectCartQuantity);

	return (
		<header className="flex items-center justify-between h-16 px-4 border-b md:px-6">
			<button type="button" className="flex items-center gap-2">
				<MountainIcon className="w-6 h-6" />
				<span className="text-lg font-semibold">Goosebumps</span>
			</button>
			<button
				type="button"
				className="relative inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
			>
				<ShoppingCartIcon className="w-5 h-5" />
				<span className="sr-only">Cart</span>
				{cartCount && cartCount > 0 && (
					<Badge className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-0.5 text-xs rounded-full">
						{cartCount}
					</Badge>
				)}
			</button>
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

function ShoppingCartIcon(props: SVGProps<SVGSVGElement>) {
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
			<title>shopping cart</title>
			<circle cx="8" cy="21" r="1" />
			<circle cx="19" cy="21" r="1" />
			<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
		</svg>
	);
}
