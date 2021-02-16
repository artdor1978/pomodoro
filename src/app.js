import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Init from "./init.js";
//import { countDownMinutes } from "./coundown.js";
const App = () => {
	const [work, setWork] = useState(25);
	const [relax, setRelax] = useState(5);
	const [timeLeft, setTime] = useState(work + ":00");
	const [textButton, setText] = useState("Start");

	useEffect(() => {
		setTime(work + ":00");
	}, [work]);
	var timeoutHandle;console.log("0",timeoutHandle);
	const countDownMinutes = (minutes) => {
		let timeString;
		let seconds = 60;
		const tick = () => {
			let currentMinutes = minutes - 1;
			seconds--;
			timeString =
				(currentMinutes < 10 ? "0" : "") +
				String(currentMinutes) +
				":" +
				(seconds < 10 ? "0" : "") +
				String(seconds);
			setTime(timeString);
			if (seconds > 0) {
				timeoutHandle = setTimeout(tick, 1000);
			} else {
				if (minutes > 1) {
					timeoutHandle = setTimeout(function () {
						countDownMinutes(minutes - 1);
					}, 1000);
				}
			}
		};

		tick();
		console.log(timeoutHandle);
	};
	return (
		<>
			<div className="init">
				<Init
					setCount={setWork}
					count={work}
					label="session"
					leftButton="-"
					rightButton="+"
				/>
				<Init
					setCount={setRelax}
					count={relax}
					label="break"
					leftButton="-"
					rightButton="+"
				/>
			</div>
			<div className="process">
				<div id="timer-label">Session</div>
				<div id="time-left">{timeLeft}</div>
				<button
					id="start_stop"
					onClick={() => {
						countDownMinutes(work);
					}}
				>
					{textButton}
				</button>
				<button
					id="reset"
					onClick={() => {
						setWork(25);
						setRelax(5);
						console.log("1",timeoutHandle);
						clearInterval(timeoutHandle);
						console.log("2",timeoutHandle); //setTime(work + ":00");
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
