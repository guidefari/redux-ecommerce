import {
	type CartProduct,
	type CartSlice,
	addToCart,
	cartSlice,
	decrementFromCart,
	increment,
	selectCartQuantity,
	selectProducts,
} from "./cart";
import { type AppStore, makeStore } from "./store";

interface LocalTestContext {
	store: AppStore;
}

describe<LocalTestContext>("cart reducer", (it) => {
	beforeEach<LocalTestContext>((context) => {
		const initialState: CartSlice = {
			id: null,
			products: null,
		};

		const store = makeStore({ cart: initialState });

		context.store = store;
	});

	it("should handle initial state", () => {
		expect(cartSlice.reducer(undefined, { type: "unknown" })).toStrictEqual({
			id: null,
			products: null,
		});
	});

	it("should handle addToCart", ({ store }) => {
		const product: CartProduct = {
			id: "1",
			name: "Product 1",
			description: "Description 1",
			price: 10,
			image: "image1.jpg",
			quantity: 1,
		};

		expect(selectProducts(store.getState())).toBeNull();

		store.dispatch(addToCart(product));

		expect(selectProducts(store.getState())).toEqual([product]);
	});

	it("should handle increment", ({ store }) => {
		const product: CartProduct = {
			id: "1",
			name: "Product 1",
			description: "Description 1",
			price: 10,
			image: "image1.jpg",
			quantity: 1,
		};

		store.dispatch(addToCart(product));

		expect(selectCartQuantity(store.getState())).toBe(1);

		store.dispatch(increment({ id: product.id }));

		expect(selectCartQuantity(store.getState())).toBe(2);
	});

	it("should handle decrementFromCart", ({ store }) => {
		const product: CartProduct = {
			id: "1",
			name: "Product 1",
			description: "Description 1",
			price: 10,
			image: "image1.jpg",
			quantity: 2,
		};

		store.dispatch(addToCart(product));

		expect(selectCartQuantity(store.getState())).toBe(2);

		store.dispatch(decrementFromCart({ id: product.id }));

		expect(selectCartQuantity(store.getState())).toBe(1);
	});
});
