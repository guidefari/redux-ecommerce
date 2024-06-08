import { toast } from "@/components/ui/use-toast";
import {
	readFromLocalStorage,
	writeToLocalStorage,
} from "@/services/clientStorage";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@shared/types";
import { createAppSlice } from "./createAppSlice";

export type CartProduct = Omit<Product, "images"> & {
	quantity: number;
	image: string;
};
export interface CartSlice {
	id: string | null;
	products?: Array<CartProduct> | null;
}

const initialState: CartSlice = readFromLocalStorage({
	tableName: "carts",
	id: "wip",
}) || {
	id: null,
	products: null,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const cartSlice = createAppSlice({
	name: "cart",
	initialState,
	reducers: (create) => ({
		addToCart: create.reducer((state, action: PayloadAction<CartProduct>) => {
			const sideEffects = () => {
				toast({
					title: `⊕ ${action.payload.name} added to cart`,
					duration: 1300,
				});

				writeToLocalStorage<CartSlice>({
					tableName: "carts",
					id: "wip",
					data: { id: state.id, products: state.products },
				});
			};

			if (!state.products) {
				state.products = [action.payload];
				sideEffects();
				return;
			}

			const index = state.products.findIndex(
				(product) => product.id === action.payload.id,
			);
			if (index === -1) {
				state.products.push(action.payload);
				sideEffects();
				return;
			}

			state.products[index].quantity += 1;
			sideEffects();
			return;
		}),
		increment: create.reducer(
			(state, action: PayloadAction<{ id: string }>) => {
				if (!state.products) return;

				const index = state.products.findIndex(
					(product) => product.id === action.payload.id,
				);
				if (index === -1) {
					return;
				}

				const sideEffects = () => {
					if (!state.products) return;

					toast({
						title: `⊕ ${state.products[index].name} added to cart`,
						duration: 1300,
					});

					writeToLocalStorage<CartSlice>({
						tableName: "carts",
						id: "wip",
						data: { id: state.id, products: state.products },
					});
				};

				state.products[index].quantity += 1;
				sideEffects();
				return;
			},
		),
		decrementFromCart: create.reducer(
			(state, action: PayloadAction<{ id: string }>) => {
				if (!state.products) return;

				const index = state.products.findIndex(
					(product) => product.id === action.payload.id,
				);
				if (index === -1) {
					return;
				}

				state.products[index].quantity -= 1;

				const sideEffects = () => {
					if (!state.products) return;

					toast({
						title: `⊖ 1 ${state.products[index].name} removed from cart`,
						duration: 1300,
						variant: "destructive",
					});

					writeToLocalStorage<CartSlice>({
						tableName: "carts",
						id: "wip",
						data: { id: state.id, products: state.products },
					});
				};
				sideEffects();

				if (state.products[index].quantity === 0) {
					state.products.splice(index, 1);
					return;
				}
			},
		),
	}),
	selectors: {
		selectProducts: (cart) => cart.products,
		selectCartQuantity: (cart) =>
			cart.products?.reduce((a, b) => a + b.quantity, 0) || 0,
		selectCartTotal: (cart) =>
			cart.products?.reduce((a, b) => a + b.price * b.quantity, 0) || 0,
	},
});

// Action creators are generated for each case reducer function.
export const { addToCart, decrementFromCart, increment } = cartSlice.actions;

export const { selectProducts, selectCartQuantity, selectCartTotal } =
	cartSlice.selectors;
