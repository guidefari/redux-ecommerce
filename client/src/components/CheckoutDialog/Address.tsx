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

export function Address() {
	return (
		<div>
			<div>
				<Button>Enter Address</Button>
			</div>
			<div className="sm:max-w-md">
				<div>
					<div>Enter Your Address</div>
				</div>
				<div className="space-y-4">
					<div className="grid gap-2">
						<Label htmlFor="address">Street Address</Label>
						<Input id="address" placeholder="123 Main St" />
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="city">City</Label>
							<Input id="city" placeholder="New York" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="state">State</Label>
							<Select name="state">
								<SelectTrigger>
									<SelectValue placeholder="Select state" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="ca">California</SelectItem>
									<SelectItem value="tx">Texas</SelectItem>
									<SelectItem value="ny">New York</SelectItem>
									<SelectItem value="fl">Florida</SelectItem>
									<SelectItem value="il">Illinois</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="zip">Zip Code</Label>
							<Input id="zip" placeholder="12345" type="number" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="country">Country</Label>
							<Select name="country">
								<SelectTrigger>
									<SelectValue placeholder="Select country" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="us">United States</SelectItem>
									<SelectItem value="ca">Canada</SelectItem>
									<SelectItem value="mx">Mexico</SelectItem>
									<SelectItem value="gb">United Kingdom</SelectItem>
									<SelectItem value="au">Australia</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<div>
					<Button className="ml-auto" type="submit">
						Save Address
					</Button>
				</div>
			</div>
		</div>
	);
}
