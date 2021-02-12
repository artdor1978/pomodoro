import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Init from "./init.js";
const App = () => {
	const [work, setWork] = useState(25);
	const [relax, setRelax] = useState(5);
	const [timeLeft, setTime] = useState(work + ":00");
	const [textButton, setText] = useState("Start");
	const countDown = () => {
		setText("Stop");
		let seconds = 60;
		const y = work - 1;
		setInterval(() => {
			seconds--;
			if (seconds < 0) {
				return;
			}
			setTime(work - 1 + ":" + seconds);
			countDown;
		}, 1000);
	};

	return (
		<>
			<div className="init">
				<Init setCount={setWork} count={work} label="session" />
				<Init setCount={setRelax} count={relax} label="break" />
			</div>
			<div className="process">
				<div id="timer-label">Session</div>
				<div id="time-left">{timeLeft}</div>
				<button id="start_stop" onClick={countDown}>
					{textButton}
				</button>
				<button
					id="reset"
					onClick={() => {
						setWork(25);
						setRelax(5);
						clearInterval(countDown);
						setTime(work + ":00");
						setText("Start");
					}}
				>
					Reset
				</button>
				<div></div>
			</div>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
