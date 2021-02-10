import React, { useState } from "react";
import ReactDOM from "react-dom";

const timer = (time) => {
	const [count, setCount] = useState(time);
	return (
		<div>
			<button onClick={() => setCount((currentCount) => currentCount - 1)}>
				-
			</button>
			{count}
			<button onClick={() => setCount((currentCount) => currentCount + 1)}>
				+
			</button>
		</div>
	);
};

const App = () => {
	return (
		<div>
		<h3>Work!</h3>
			{timer(25)}
			<h3>Relax!</h3>
			{timer(5)}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
