import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Init from "./init.js";
function App() {
	const [work, setWork] = useState(25);
	const [relax, setRelax] = useState(5);
	const [seconds, setSeconds] = useState(work * 60);
	const [isActive, setIsActive] = useState(false);
	const [timeLeft, setTime] = useState(work + ":00");

	useEffect(() => {
		setTime(work + ":00");
		setSeconds(work * 60);
	}, [work]);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setSeconds(work * 60);
		setIsActive(false);
		setWork(25);
		setRelax(5);
		setTime(work + ":00");
	}

	useEffect(() => {
		let interval = null;
		if (isActive && seconds >= 0) {
			interval = setInterval(() => {
				setSeconds((seconds) => seconds - 1);
				let minutes = Math.floor(seconds / 60);
				let countSec = Math.round((seconds / 60 - minutes) * 60);
				setTime(
					(minutes < 10 ? "0" : "") +
						minutes +
						":" +
						(countSec < 10 ? "0" : "") +
						countSec
				);
			}, 100);
		} else if (!isActive && seconds < 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

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
				<button id="start_stop" onClick={toggle}>
					{isActive ? "Pause" : "Start"}
				</button>
				<button id="reset" onClick={reset}>
					Reset
				</button>
				<div></div>
			</div>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
