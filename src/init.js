import React from "react";
import { Timer } from "./timer.js";
import Display from "./display.js";
const Init = ({ setCount, count, label }) => {
	return (
		<div>
			<Display count={count} label={label} />
			<Timer setCount={setCount} count={count} label={label} />
		</div>
	);
};

export default Init;
