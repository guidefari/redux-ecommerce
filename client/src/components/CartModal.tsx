import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
	decrementFromCart,
	increment,
	selectCartQuantity,
	selectCartTotal,
	selectProducts,
} from "@/store/cart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { SVGProps } from "react";
import { Badge } from "./ui/badge";

export function CartModal() {
	const cartCount = useAppSelector(selectCartQuantity);
	const cartProcducts = useAppSelector(selectProducts);
	const cartTotal = useAppSelector(selectCartTotal);
	const dispatch = useAppDispatch();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button
					type="button"
					className="relative inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
				>
					<ShoppingCartIcon className="w-5 h-5" />
					<span className="sr-only">Cart</span>
					{cartCount > 0 && (
						<Badge className="absolute -top-2 -right-2 text-theme-dark bg-theme-highlight-secondary  px-2 py-0.5 text-xs rounded-full">
							{cartCount}
						</Badge>
					)}
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px] bg-theme-dark">
				<DialogHeader>
					<DialogTitle>Cart</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid gap-4">
						{cartProcducts?.map((product) => (
							<div
								key={product.id}
								className="grid grid-cols-[80px_1fr_80px] items-center gap-4"
							>
								<img
									alt="Product"
									className="object-cover rounded-md"
									height={80}
									src={product.image}
									style={{
										aspectRatio: "80/80",
										objectFit: "cover",
									}}
									width={80}
								/>
								<div className="grid gap-1">
									<h3 className="font-medium">{product.name}</h3>
									<p className="text-sm ">{product.description || ""}</p>
								</div>
								<div className="flex items-center gap-2">
									<Button
										size="icon"
										variant="ghost"
										onClick={() =>
											dispatch(decrementFromCart({ id: product.id }))
										}
									>
										<MinusIcon className="w-4 h-4" />
										<span className="sr-only">Decrease quantity</span>
									</Button>
									<span>{product.quantity}</span>
									<Button
										size="icon"
										variant="ghost"
										onClick={() => dispatch(increment({ id: product.id }))}
									>
										<PlusIcon className="w-4 h-4" />
										<span className="sr-only">Increase quantity</span>
									</Button>
								</div>
							</div>
						))}
					</div>
					{cartTotal > 0 && (
						<div>
							<Separator />
							<div className="grid items-center grid-cols-2">
								<p className="text-lg font-medium">Total</p>
								<p className="text-lg font-medium text-right">
									$ {cartTotal.toFixed(2)}
								</p>
							</div>
						</div>
					)}
				</div>
				<DialogFooter className="flex gap-2">
					<div>
						<Button className="hover:text-theme-highlight-secondary">
							Checkout
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

function MinusIcon(props: SVGProps<SVGSVGElement>) {
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
			<title>remove one</title>
			<path d="M5 12h14" />
		</svg>
	);
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
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
			<title>add</title>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
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
