import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Pagination } from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createLazyFileRoute("/products")({
	component: Component,
});

function Component() {
	const [selectedFilters, setSelectedFilters] = useState({
		categories: [],
		priceRange: [0, 100],
		sortBy: "popularity",
	});
	const products = [
		{
			id: 1,
			image: "/placeholder.svg",
			title: "Cozy Sweater",
			price: 49.99,
		},
		{
			id: 2,
			image: "/placeholder.svg",
			title: "Stylish Jeans",
			price: 79.99,
		},
		{
			id: 3,
			image: "/placeholder.svg",
			title: "Comfortable Sneakers",
			price: 59.99,
		},
		{
			id: 4,
			image: "/placeholder.svg",
			title: "Elegant Dress",
			price: 89.99,
		},
		{
			id: 5,
			image: "/placeholder.svg",
			title: "Casual T-Shirt",
			price: 24.99,
		},
		{
			id: 6,
			image: "/placeholder.svg",
			title: "Durable Backpack",
			price: 69.99,
		},
		{
			id: 7,
			image: "/placeholder.svg",
			title: "Chic Blazer",
			price: 99.99,
		},
		{
			id: 8,
			image: "/placeholder.svg",
			title: "Comfy Joggers",
			price: 39.99,
		},
		{
			id: 423,
			image: "/placeholder.svg",
			title: "Elegant Dress",
			price: 89.99,
		},
		{
			id: 32,
			image: "/placeholder.svg",
			title: "Casdsual T-Shirt",
			price: 24.99,
		},
		{
			id: 236,
			image: "/placeholder.svg",
			title: "Durabsdle Backpack",
			price: 69.99,
		},
		{
			id: 723,
			image: "/placeholder.svg",
			title: "Chic sdBlazer",
			price: 99.99,
		},
		{
			id: 328,
			image: "/placeholder.svg",
			title: "Comfyds Joggers",
			price: 39.99,
		},
	];
	const filteredProducts = useMemo(() => {
		return products
			.filter((product) => {
				if (selectedFilters.categories.length > 0) {
					return true;
				}
				if (
					product.price < selectedFilters.priceRange[0] ||
					product.price > selectedFilters.priceRange[1]
				) {
					return false;
				}
				return true;
			})
			.sort((a, b) => {
				if (selectedFilters.sortBy === "price-asc") {
					return a.price - b.price;
				} else if (selectedFilters.sortBy === "price-desc") {
					return b.price - a.price;
				} else {
					return 0;
				}
			});
	}, [selectedFilters]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;
	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	const handleCategoryFilter = (category) => {
		setSelectedFilters({
			...selectedFilters,
			categories: selectedFilters.categories.includes(category)
				? selectedFilters.categories.filter((item) => item !== category)
				: [...selectedFilters.categories, category],
		});
	};
	const handlePriceRangeFilter = (range) => {
		setSelectedFilters({
			...selectedFilters,
			priceRange: range,
		});
	};
	const handleSortByFilter = (sortBy) => {
		setSelectedFilters({
			...selectedFilters,
			sortBy,
		});
	};
	return (
		<div className="grid md:grid-cols-[240px_1fr] gap-8 px-4 w-full ">
			<div className="grid gap-6">
				<Card>
					<CardHeader>
						<CardTitle>Filters</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<div>
								<h3 className="mb-2 text-base font-medium">Categories</h3>
								<div className="grid gap-2">
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox
											checked={selectedFilters.categories.includes("clothing")}
											onCheckedChange={() => handleCategoryFilter("clothing")}
										/>
										Clothing
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox
											checked={selectedFilters.categories.includes(
												"accessories",
											)}
											onCheckedChange={() =>
												handleCategoryFilter("accessories")
											}
										/>
										Accessories
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox
											checked={selectedFilters.categories.includes("shoes")}
											onCheckedChange={() => handleCategoryFilter("shoes")}
										/>
										Shoes
									</Label>
								</div>
							</div>
							<div>
								<h3 className="mb-2 text-base font-medium">Price Range</h3>
								<div />
							</div>
							<div>
								<h3 className="mb-2 text-base font-medium">Sort By</h3>
								<div className="grid gap-2">
									<Label className="flex items-center gap-2 font-normal">
										<RadioGroup
											value={selectedFilters.sortBy}
											onValueChange={handleSortByFilter}
										>
											<RadioGroupItem value="popularity" />
										</RadioGroup>
										Popularity
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<RadioGroup
											value={selectedFilters.sortBy}
											onValueChange={handleSortByFilter}
										>
											<RadioGroupItem value="price-asc" />
										</RadioGroup>
										Price: Low to High
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<RadioGroup
											value={selectedFilters.sortBy}
											onValueChange={handleSortByFilter}
										>
											<RadioGroupItem value="price-desc" />
										</RadioGroup>
										Price: High to Low
									</Label>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="grid gap-8">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">Products</h1>
					<div className="flex items-center gap-2">
						<span className="text-sm text-gray-500">
							{(currentPage - 1) * itemsPerPage + 1} -{" "}
							{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of{" "}
							{filteredProducts.length}
						</span>
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					</div>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{filteredProducts
						.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
						.map((product) => (
							<div key={product.id} className="grid gap-2">
								<img
									src="/placeholder.svg"
									alt={product.title}
									width={300}
									height={300}
									className="object-cover w-full rounded-lg aspect-square"
								/>
								<div className="flex items-center justify-between">
									<h3 className="font-medium">{product.title}</h3>
									<span className="font-medium">
										${product.price.toFixed(2)}
									</span>
								</div>
								<Button variant="outline" className="w-full">
									Add to Cart
								</Button>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
