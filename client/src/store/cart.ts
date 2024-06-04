import { toast } from "@/components/ui/use-toast";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "./createAppSlice";
import type { AppThunk } from "./store";

type Product = {
	id: string;
	quantity: number;
	name: string;
};

export interface CartSlice {
	id: string | null;
	products?: Array<Product> | null;
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
		// increment: create.reducer((state) => {
		// 	// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// 	// doesn't actually mutate the state because it uses the Immer library,
		// 	// which detects changes to a "draft state" and produces a brand new
		// 	// immutable state based off those changes
		// 	state.value += 1;
		// }),
		// decrement: create.reducer((state) => {
		// 	state.value -= 1;
		// }),
		addToCart: create.reducer((state, action: PayloadAction<Product>) => {
			const showToast = () =>
				toast({
					title: `✅ ${action.payload.name} added to cart`,
					duration: 1300,
					// description: "Friday, February 10, 2023 at 5:57 PM",
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

			state.products[index].quantity += action.payload.quantity;
			showToast();
			return;
		}),
		// incrementAsync: create.asyncThunk(
		// 	async (amount: number) => {
		// 		const response = await fetchCount(amount);
		// 		// The value we return becomes the `fulfilled` action payload
		// 		return response.data;
		// 	},
		// 	{
		// 		pending: (state) => {
		// 			state.status = "loading";
		// 		},
		// 		fulfilled: (state, action) => {
		// 			state.status = "idle";
		// 			state.value += action.payload;
		// 		},
		// 		rejected: (state) => {
		// 			state.status = "failed";
		// 		},
		// 	},
		// ),
	}),
	// You can define your selectors here. These selectors receive the slice
	// state as their first argument.
	selectors: {
		selectProducts: (counter) => counter.products,
		selectCartId: (counter) => counter.id,
		selectCartQuantity: (cart) =>
			cart.products?.reduce((a, b) => a + b.quantity, 0),
	},
});

// Action creators are generated for each case reducer function.
export const { addToCart } = cartSlice.actions;

export const { selectCartId, selectProducts, selectCartQuantity } =
	cartSlice.selectors;
