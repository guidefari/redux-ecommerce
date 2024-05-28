import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Counter.module.css";
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
	incrementIfOdd,
	selectCount,
	selectStatus,
} from "./counterSlice";
import { Button } from "@mui/material";

export const Counter = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCount);
	const status = useAppSelector(selectStatus);
	const [incrementAmount, setIncrementAmount] = useState("2");

	const incrementValue = Number(incrementAmount) || 0;

	return (
		<div>
			<div className={styles.row}>
				<Button
					className={styles.button}
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
					type="button"
				>
					-
				</Button>
				<span aria-label="Count" className={styles.value}>
					{count}
				</span>
				<Button
					className={styles.button}
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
					type="button"
				>
					+
				</Button>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label="Set increment amount"
					value={incrementAmount}
					type="number"
					onChange={(e) => {
						setIncrementAmount(e.target.value);
					}}
				/>
				<Button
					className={styles.button}
					onClick={() => dispatch(incrementByAmount(incrementValue))}
					type="button"
				>
					Add Amount
				</Button>
				<Button
					className={styles.asyncButton}
					disabled={status !== "idle"}
					onClick={() => dispatch(incrementAsync(incrementValue))}
					type="button"
				>
					Add Async
				</Button>
				<Button
					className={styles.button}
					onClick={() => {
						dispatch(incrementIfOdd(incrementValue));
					}}
					type="button"
				>
					Add If Odd
				</Button>
			</div>
		</div>
	);
};
