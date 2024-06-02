import type { Product } from "@shared/types";

export const products: Product[] = [
	{
		id: "1",
		name: "iPhone",
		description: "Very nice. design is very human",
		price: 229.49,
		images: [
			"https://images.unsplash.com/photo-1611791484670-ce19b801d192?q=80&w=3457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		relatedProducts: ["2"],
		discount: 0,
		featured: true,
	},
	{
		id: "2",
		name: "iPod",
		description: "Description of Product 2",
		price: 20,
		images: ["image2.jpg"],
		relatedProducts: ["1"],
		discount: 8,
	},
	{
		id: "3",
		name: "Product 3",
		description: "Description of Product 3",
		price: 30,
		images: ["image3.jpg"],
		relatedProducts: ["3"],
		discount: 10,
	},
	{
		id: "4",
		name: "Sony XM4",
		description: "Great value for money",
		price: 229.99,
		images: [
			"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1618366712069-cf25c7b669f3?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		relatedProducts: ["4"],
		discount: 15,
		featured: true,
	},
	{
		id: "5",
		name: "Product 5",
		description: "Description of Product 5",
		price: 50,
		images: ["image5.jpg"],
		relatedProducts: ["5"],
		discount: 20,
	},
	{
		id: "6",
		name: "Product 6",
		description: "Description of Product 6",
		price: 60,
		images: ["image6.jpg"],
		relatedProducts: ["6"],
		discount: 25,
	},
	{
		id: "7",
		name: "Product 7",
		description: "Description of Product 7",
		price: 70,
		images: ["image7.jpg"],
		relatedProducts: ["7"],
		discount: 30,
	},
	{
		id: "8",
		name: "Product 8",
		description: "Description of Product 8",
		price: 80,
		images: ["image8.jpg"],
		relatedProducts: ["8"],
		discount: 0,
	},
	{
		id: "9",
		name: "Product 9",
		description: "Description of Product 9",
		price: 90,
		images: ["image9.jpg"],
		relatedProducts: ["9"],
		discount: 8,
	},
	{
		id: "10",
		name: "iPod Classic",
		description: "An absolute classic",
		price: 390,
		images: [
			"https://images.unsplash.com/photo-1536656930057-9252abf296a5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1548122038-f8ba35ae8420?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		relatedProducts: ["0"],
		discount: 0,
		featured: true,
	},
	{
		id: "11",
		name: "Product 11",
		description: "Description of Product 11",
		price: 110,
		images: ["image11.jpg"],
		relatedProducts: ["1"],
		discount: 15,
	},
	{
		id: "12",
		name: "Product 12",
		description: "Description of Product 12",
		price: 120,
		images: ["image12.jpg"],
		relatedProducts: ["2"],
		discount: 20,
	},
	{
		id: "13",
		name: "Product 13",
		description: "Description of Product 13",
		price: 130,
		images: ["image13.jpg"],
		relatedProducts: ["3"],
		discount: 25,
	},
	{
		id: "14",
		name: "Product 14",
		description: "Description of Product 14",
		price: 140,
		images: ["image14.jpg"],
		relatedProducts: ["4"],
		discount: 0,
	},
	{
		id: "15",
		name: "Product 15",
		description: "Description of Product 15",
		price: 150,
		images: ["image15.jpg"],
		relatedProducts: ["5"],
		discount: 5,
	},
	{
		id: "16",
		name: "Product 16",
		description: "Description of Product 16",
		price: 160,
		images: ["image16.jpg"],
		relatedProducts: ["6"],
		discount: 8,
	},
	{
		id: "17",
		name: "Product 17",
		description: "Description of Product 17",
		price: 170,
		images: ["image17.jpg"],
		relatedProducts: ["7"],
		discount: 10,
	},
	{
		id: "18",
		name: "Product 18",
		description: "Description of Product 18",
		price: 180,
		images: ["image18.jpg"],
		relatedProducts: ["8"],
		discount: 15,
	},
	{
		id: "19",
		name: "Bluetooth speaker",
		description: "Very nice bass",
		price: 190,
		images: [
			"https://images.unsplash.com/photo-1589833870588-8a0902bcf55b?q=80&w=2178&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1546518449-3826f84350e9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		relatedProducts: ["9"],
		discount: 20,
		featured: true,
	},
	{
		id: "20",
		name: "Product 20",
		description: "Description of Product 20",
		price: 200,
		images: ["image20.jpg"],
		relatedProducts: ["0"],
		discount: 25,
	},
];

export function getProductById(id: string): Product | undefined {
	return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
	return products.filter((p) => p.featured);
}
export function getDiscountedProducts(): Product[] {
	return products.filter((p) => p.discount > 0);
}

export function getManyProducts(ids: string[]): Product[] {
	return products.filter((p) => ids.includes(p.id));
}
