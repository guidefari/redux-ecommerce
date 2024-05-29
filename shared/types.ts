export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	images: Array<string>;
	relatedProducts: Array<string>;
	discount: number;
};

export type ProductResponse = {
	products: Array<Product>;
	total: number;
	skip: number;
	limit: number;
};

export type CheckoutPayload = {
	products: Array<{
		id: string;
		quantity: number;
	}>;
	card: Card;
};

export type LoginPayload = {
	email: string;
	password: string;
};

export type RegisterPayload = {
	name: string;
	email: string;
	password: string;
};

export type Card = {
	cardholderName: string;
	cardNumber: number;
	cvv: number;
};

export type Category = {
	name: string;
	id: string;
	products: Array<Product>;
};
