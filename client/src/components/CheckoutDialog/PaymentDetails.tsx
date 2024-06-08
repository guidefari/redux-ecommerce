import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { useDispatch } from "./Context";

const EXPIRY_DATE_REGEX = /^\d{2}\/\d{2}$/;
const formSchema = z.object({
	expiryDate: z.string().regex(EXPIRY_DATE_REGEX, "Must be MM/YY"),
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
		mode: "onChange",
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	function onBack() {
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

	// TODO: to be continued.
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		fieldName: keyof z.infer<typeof formSchema>,
	) => {
		const { value } = e.target;
		// const regex = /^\d{2}\/\d{2}$/;

		// if (value.match(regex)) {
		// const [month, day] = value.split("/");
		// e.target.value = `${month.padStart(2, "0")}/${day.padStart(2, "0")}`;
		// }
		form.setValue(fieldName, value, {
			shouldDirty: true,
			shouldValidate: true,
		}); // <-- Set the form value
		console.log(`${fieldName}: `, value);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="space-y-8">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="cardNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Card Number</FormLabel>
									<FormControl>
										<Input
											maxLength={20}
											placeholder="0000 0000 0000 0001"
											{...field}
										/>
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
												onChange={(e) => handleChange(e, field.name)}
												maxLength={5}
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
											<Input maxLength={4} placeholder="007" {...field} />
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
