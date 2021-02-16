import React from "react";
export const Timer = ({ setCount, count, label, lb, rb }) => {
	return (
		<>
			<button
				id={label + "-decrement"}
				onClick={() => (count > 1 ? setCount(count - 1) : setCount(1))}
			>
				{lb}
			</button>

			<button
				id={label + "-increment"}
				onClick={() => (count >= 60 ? setCount(60) : setCount(count + 1))}
			>
				{rb}
			</button>
		</>
	);
};
