import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
	incrementIfOdd,
	selectCount,
	selectStatus,
} from "./counterSlice";

export const Counter = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCount);
	const status = useAppSelector(selectStatus);
	const [incrementAmount, setIncrementAmount] = useState("2");

	const incrementValue = Number(incrementAmount) || 0;

	return (
		<div>
			<div>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
					type="button"
				>
					-
				</button>
				<span aria-label="Count">{count}</span>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
					type="button"
				>
					+
				</button>
			</div>
			<div>
				<input
					aria-label="Set increment amount"
					value={incrementAmount}
					type="number"
					onChange={(e) => {
						setIncrementAmount(e.target.value);
					}}
				/>
				<button
					onClick={() => dispatch(incrementByAmount(incrementValue))}
					type="button"
				>
					Add Amount
				</button>
				<button
					disabled={status !== "idle"}
					onClick={() => dispatch(incrementAsync(incrementValue))}
					type="button"
				>
					Add Async
				</button>
				<button
					onClick={() => {
						dispatch(incrementIfOdd(incrementValue));
					}}
					type="button"
				>
					Add If Odd
				</button>
			</div>
		</div>
	);
};
