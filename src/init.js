import React from "react";
import { Timer } from "./timer.js";
import Display from "./display.js";
const Init = ({ setCount, count, label, leftButton, rightButton }) => {
	return (
		<div>
			<Display count={count} label={label} />
			<Timer
				setCount={setCount}
				count={count}
				label={label}
				lb={leftButton}
				rb={rightButton}
			/>
		</div>
	);
};

export default Init;
