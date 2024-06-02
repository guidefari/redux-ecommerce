import { Button } from "@/components/ui/button";
import { addToCart } from "@/store/cart";
import { useAppDispatch } from "@/store/hooks";
import type { Product } from "@shared/types";

type Props = Pick<Product, "name" | "price" | "id"> & { img: string };

export function ProductCard({ img, name, price, id }: Props) {
	const dispatch = useAppDispatch();

	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[300px] transition-all  hover:shadow-xl">
			{/* <a className="block" href="#"> */}
			<img
				alt={img}
				className="w-full hover:cursor-pointer h-[300px] object-cover"
				height={400}
				src={img}
				style={{
					aspectRatio: "400/400",
					objectFit: "cover",
				}}
				width={400}
			/>
			{/* </a> */}
			<div className="p-4 space-y-2">
				{/* <a className="block" href="#"> */}
				<h3 className="text-lg font-semibold text-gray-900 hover:cursor-pointer hover:underline">
					{name}
				</h3>
				{/* </a> */}
				<div className="flex items-center justify-between">
					<span className="text-xl font-bold text-gray-900">${price}</span>
					<Button
						onClick={() => dispatch(addToCart({ id, quantity: 1 }))}
						variant="outline"
						size="sm"
					>
						Add to Cart
					</Button>
				</div>
			</div>
		</div>
	);
}
