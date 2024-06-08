import { type Dispatch, createContext, useContext, useReducer } from "react";

type DialogState = "cart" | "address" | "payment";

type DialogTitle = {
	[key in DialogState]: string;
};

export const DialogTitleCopy: DialogTitle = {
	cart: "Cart",
	address: "Address",
	payment: "Payment",
};

type Action = { type: "SET_STATE"; payload: DialogState };

type DispatchContextType = Dispatch<Action> | undefined;
const StateContext = createContext<DialogState | undefined>(undefined);
const DispatchContext = createContext<DispatchContextType>(undefined);

type Props = {
	children: React.ReactNode;
};

export const StateProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

export const useStateValue = () => {
	const state = useContext(StateContext);
	if (state === undefined) {
		throw new Error("useStateValue must be used within a StateProvider");
	}
	return state;
};

export const useDispatch = () => {
	const dispatch = useContext(DispatchContext);
	if (!dispatch) {
		throw new Error("useDispatch must be used within a StateProvider");
	}
	return dispatch;
};

// Define your initial state
const initialState: DialogState = "cart";

// Define your reducer
function reducer(state: DialogState, action: Action): DialogState {
	switch (action.type) {
		case "SET_STATE":
			return action.payload;
		default:
			return state;
	}
}
