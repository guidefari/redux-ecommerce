import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addToCart } from "@/store/cart";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/store/products";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

// TODO:
//  fetch from BE
// pagination, sort, filter. These should also maintain state in the url
// styling. fixed side nav, maybe even collapsable. how will it look for mobile, drawer?

export const Route = createLazyFileRoute("/products")({
	component: Component,
});

function Component() {
	const [selectedFilters, setSelectedFilters] = useState({
		categories: [],
		priceRange: [0, 10000],
		sortBy: "popularity",
	});

	const dispatch = useDispatch();

	const {
		data: products,
		isError,
		isLoading,
		isSuccess,
		error,
	} = useGetProductsQuery();

	const { data: categories } = useGetCategoriesQuery();

	const filteredProducts = useMemo(() => {
		if (!products) {
			return [];
		}

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
	}, [selectedFilters, products]);

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
		<div className="grid md:grid-cols-[240px_1fr] my-3 gap-8 px-4 w-full overflow-y-auto">
			<Card className="">
				<CardHeader>
					<CardTitle>Filters</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div>
							<h3 className="mb-2 text-base font-medium">Categories</h3>
							<div className="grid gap-2">
								{categories?.map((category) => (
									<Label
										key={category.id}
										className="flex items-center gap-2 font-normal"
									>
										<Checkbox
											checked={selectedFilters.categories.includes(
												category.name,
											)}
											onCheckedChange={() =>
												handleCategoryFilter(category.name)
											}
										/>
										{category.name}
									</Label>
								))}
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
			<div className="grid gap-3">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">Products</h1>
					<div className="flex items-center gap-2">
						<span className="text-sm text-gray-500">
							{(currentPage - 1) * itemsPerPage + 1} -{" "}
							{Math.min(currentPage * itemsPerPage, filteredProducts.length)} of{" "}
							{filteredProducts.length}
						</span>
					</div>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{filteredProducts
						.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
						.map((product) => (
							<div key={product.id} className="grid gap-2">
								<img
									src={product.images[0]}
									alt={product.name}
									width={300}
									height={300}
									className="object-cover w-full rounded-lg aspect-square"
								/>
								<div className="flex items-center justify-between">
									<h3 className="font-medium">{product.name}</h3>
									<span className="font-medium">
										${product.price.toFixed(2)}
									</span>
								</div>
								<Button
									onClick={() =>
										dispatch(
											addToCart({
												id: product.id,
												quantity: 1,
												name: product.name,
												image: product.images[0],
												price: product.price,
												description: product.description,
											}),
										)
									}
									variant="secondary"
									className="w-full"
								>
									Add to Cart
								</Button>
							</div>
						))}
				</div>
				<Pagination
				// currentPage={currentPage}
				// totalPages={totalPages}
				// onPageChange={handlePageChange}
				>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#" isActive>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}
