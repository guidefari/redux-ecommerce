import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	readFromLocalStorage,
	writeToLocalStorage,
} from "@/services/clientStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DialogFooter } from "../ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { useDispatch } from "./Context";

const formSchema = z.object({
	expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, "Must be MM/YY"),
	cardNumber: z.number().min(16).max(20),
	cvv: z.number().min(3).max(4),
});

export function PaymentDetails() {
	const thisPatch = useDispatch();
	const WIP: z.infer<typeof formSchema> = readFromLocalStorage({
		tableName: "cards",
		id: "wip",
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: WIP ?? {
			cardNumber: 0,
			cvv: 0,
			expiryDate: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	// this should be on dialog close too
	// context may come in handy
	function onBack() {
		// writeToLocalStorage({
		// 	tableName: "addresses",
		// 	id: "wip",
		// 	data: form.getValues(),
		// });

		thisPatch({ type: "SET_STATE", payload: "address" });
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <shhhh. this isn't a problem>
	useEffect(() => {
		return () => {
			console.log("cleanup");
			writeToLocalStorage({
				tableName: "cards",
				id: "wip",
				data: form.getValues(),
			});
		};
	}, []);

	const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log("e:", e);
		const value = e.target.value;
		const regex = /^\d{2}\/\d{2}$/;

		if (value.match(regex)) {
			const [month, day] = value.split("/");
			e.target.value = `${month.padStart(2, "0")}/${day.padStart(2, "0")}`;
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="space-y-8">
					<div className="mb-6 text-center">
						<h1 className="text-3xl font-bold ">Make a Payment</h1>
						<p className="">
							Enter your card details to complete the transaction.
						</p>
					</div>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="cardNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Card Number</FormLabel>
									<FormControl>
										<Input placeholder="0000 0000 0000 0001" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="expiryDate"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Expiry Date</FormLabel>
										<FormControl>
											<Input
												{...field}
												// value={formatDate(field.value)}
												onChange={(e) => onDateChange(e)}
												// onChange={(e) => {
												//   // Convert the input value to YYYY-MM-DD format
												//   const formattedValue = e.target.value.replace(/\//g, '\/')
												//   onChange(formattedValue);
												// }}
												placeholder="MM/YY"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="cvv"
								render={({ field }) => (
									<FormItem>
										<FormLabel>CVV</FormLabel>
										<FormControl>
											<Input placeholder="007" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<DialogFooter>
						<div className="flex justify-end gap-2">
							<Button
								onClick={onBack}
								className="hover:text-theme-highlight-secondary"
							>
								Back
							</Button>
							<Button type="submit">Pay</Button>
						</div>
					</DialogFooter>
				</div>
			</form>
		</Form>
	);
}
