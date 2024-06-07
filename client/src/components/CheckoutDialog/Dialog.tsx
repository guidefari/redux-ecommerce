import {
	Dialog as BaseDialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	selectCartQuantity,
	selectCartTotal,
	selectProducts,
} from "@/store/cart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ShoppingCartIcon } from "../icons";
import { Badge } from "../ui/badge";
import { Address } from "./Address";
import { Cart } from "./Cart";
import { DialogTitleCopy, useStateValue } from "./Context";

export const Dialog = () => {
	const cartCount = useAppSelector(selectCartQuantity);
	const cartProcducts = useAppSelector(selectProducts);
	const cartTotal = useAppSelector(selectCartTotal);
	const state = useStateValue();
	console.log("state:", state);
	const dispatch = useAppDispatch();

	return (
		<BaseDialog>
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
					<DialogTitle>{DialogTitleCopy[state]}</DialogTitle>
				</DialogHeader>
				{state === "cart" && <Cart />}
				{state === "address" && <Address />}
			</DialogContent>
		</BaseDialog>
	);
};

export default Dialog;
