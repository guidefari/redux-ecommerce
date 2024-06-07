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
import { zodResolver } from "@hookform/resolvers/zod";
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
	streetAddress: z.string().min(2).max(100),
	city: z.string().min(2).max(100),
	state: z.string().min(2).max(100),
	country: z.string().min(2).max(100),
	zipCode: z.string().min(2).max(20),
});

export function Address() {
	const thisPatch = useDispatch();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			city: "",
			state: "",
			streetAddress: "",
			zipCode: "",
			country: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="streetAddress"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Street Address</FormLabel>
							<FormControl>
								<Input placeholder="419 Main Street" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="city"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City</FormLabel>
								<FormControl>
									<Input placeholder="Bulawayo" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="state"
						render={({ field }) => (
							<FormItem>
								<FormLabel>State</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select state" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="ca">California</SelectItem>
										<SelectItem value="tx">Texas</SelectItem>
										<SelectItem value="ny">New York</SelectItem>
										<SelectItem value="fl">Florida</SelectItem>
										<SelectItem value="il">Illinois</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="zipCode"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Zip Code</FormLabel>
								<FormControl>
									<Input placeholder="42168" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="country"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Country</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select country" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="us">United States</SelectItem>
										<SelectItem value="ca">Canada</SelectItem>
										<SelectItem value="mx">Mexico</SelectItem>
										<SelectItem value="gb">United Kingdom</SelectItem>
										<SelectItem value="au">Australia</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<DialogFooter>
					<div className="flex justify-end gap-2">
						<Button
							onClick={() => thisPatch({ type: "SET_STATE", payload: "cart" })}
							className="hover:text-theme-highlight-secondary"
						>
							Back
						</Button>
						<Button type="submit">Submit</Button>
					</div>
				</DialogFooter>
			</form>
		</Form>
	);
}
