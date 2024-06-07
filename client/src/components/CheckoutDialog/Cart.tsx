import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
	decrementFromCart,
	increment,
	selectCartTotal,
	selectProducts,
} from "@/store/cart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { MinusIcon, PlusIcon } from "../icons";
import { useDispatch } from "./Context";

export function Cart() {
	const cartProcducts = useAppSelector(selectProducts);
	const cartTotal = useAppSelector(selectCartTotal);
	const dispatch = useAppDispatch();
	const thisPatch = useDispatch();

	return (
		<div>
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
				<div className="flex justify-end">
					<Button
						onClick={() => thisPatch({ type: "SET_STATE", payload: "address" })}
						className="hover:text-theme-highlight-secondary"
					>
						Checkout
					</Button>
				</div>
			</DialogFooter>
		</div>
	);
}
