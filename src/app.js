import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Init from "./init.js";
const App = () => {
	const [work, setWork] = useState(25);
	const [relax, setRelax] = useState(5);
	const [timeLeft, setTime] = useState(work + ":00");
	const [textButton, setText] = useState("Start");
	const [reset, setReset] = useState(true);
	console.log("1",reset);
	let timeoutHandle;
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
				if (reset) {
					if (seconds > 0) {
						timeoutHandle = setTimeout(tick, 1000);
						console.log("ssss", timeoutHandle);
					} else {
						if (minutes > 1) {
							timeoutHandle = setTimeout(function () {
								countDownMinutes(minutes - 1);
							}, 1000);
							console.log("ccccc", timeoutHandle);
						}
					}
				} else {
					clearTimeout(timeoutHandle);
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
						setReset(false);
						console.log("2",reset);
						//setTime(work + ":00");
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
