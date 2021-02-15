import React, { useState, useEffect } from "react";
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

		let minutes = work;

		const countDownMinutes = (minutes) => {
			let seconds = 60;
			const tick = () => {
				let currentMinutes = minutes - 1;
				seconds--;
				setTime(
					(currentMinutes < 10 ? "0" : "") +
						String(currentMinutes) +
						":" +
						(seconds < 10 ? "0" : "") +
						String(seconds)
				);
				if (seconds > 0) {
					setTimeout(tick, 1000);
				} else {
					if (minutes > 1) {
						setTimeout(countDownMinutes(minutes - 1), 1000);
					}
				}
			};
			tick();
		};
		countDownMinutes(minutes);
	};
	useEffect(() => {
		setTime(work + ":00");
	}, [work]);

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
						clearTimeout();
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
