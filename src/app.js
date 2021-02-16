import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Init from "./init.js";
//import { countDownMinutes } from "./coundown.js";
function App() {
	const [work, setWork] = useState(25);
	const [relax, setRelax] = useState(5);
	const [timeLeft, setTime] = useState(work + ":00");
	const [textButton, setText] = useState("Start");
	let [count2, setCount2] = useState(60);
	useEffect(() => {
		setTime(work + ":00");
	}, [work]);

	function useInterval(callback, delay) {
		const savedCallback = useRef();

		// Remember the latest function.
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		// Set up the interval.
		useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		}, [delay]);
	}
	function Counter() {
		useInterval(() => {
			// Your custom logic here
			setCount2(count2 - 1);
			console.log(count2);
		}, 1000);

		/*return count2;*/
	}
	const ssss = Counter();
	/*var timeoutHandle;
	console.log("0", timeoutHandle);
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
	};*/
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
				<button id="start_stop" onClick={ssss}>
					{textButton}
				</button>
				<button
					id="reset"
					onClick={() => {
						setWork(25);
						setRelax(5);
						/*console.log("1", timeoutHandle);
						clearTimeout(timeoutHandle);
						console.log("2", timeoutHandle); //setTime(work + ":00");*/
						setText("Start");
					}}
				>
					Reset
				</button>
				<div></div>
			</div>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
