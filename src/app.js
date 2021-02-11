import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Init from "./init.js";
const App = () => {
	const [work, setWork] = useState(25);
	const [relax, setRelax] = useState(5);
	return (
		<>
			<div className="init">
				<Init setCount={setWork} count={work} label="session" />
				<Init setCount={setRelax} count={relax} label="break" />
			</div>
			<div id="timer-label">"Session"</div>
			<div id="time-left">{work}</div>
			<button id="start_stop">start_stop</button>
			<button id="reset">reset</button>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
