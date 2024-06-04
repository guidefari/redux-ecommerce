import { toast } from "@/components/ui/use-toast";
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

const initialState: CartSlice = {
	id: null,
	products: null,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const cartSlice = createAppSlice({
	name: "cart",
	initialState,
	reducers: (create) => ({
		addToCart: create.reducer((state, action: PayloadAction<CartProduct>) => {
			const showToast = () =>
				toast({
					title: `✅ ${action.payload.name} added to cart`,
					duration: 1300,
				});

			if (!state.products) {
				state.products = [action.payload];
				showToast();
				return;
			}

			const index = state.products.findIndex(
				(product) => product.id === action.payload.id,
			);
			if (index === -1) {
				state.products.push(action.payload);
				showToast();
				return;
			}

			state.products[index].quantity += 1;
			showToast();
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

				state.products[index].quantity += 1;
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
