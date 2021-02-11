import React from "react";
import ReactDOM from "react-dom";
import { Timer } from "./timer.js";
import "./app.css";
const App = () => {
	const time = { work: 25, relax: 5 };
	return (
		<div className="session">
			<h3 id="session-label">Work!</h3>
			<Timer timeInit={time.work} />
			<h3 id="break-label">Relax!</h3>
			<Timer timeInit={time.relax} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
