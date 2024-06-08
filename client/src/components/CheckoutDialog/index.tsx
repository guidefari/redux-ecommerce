import { StateProvider } from "./Context";
import Dialog from "./Dialog";

export function CartModal() {
	return (
		<StateProvider>
			<Dialog />
		</StateProvider>
	);
}
