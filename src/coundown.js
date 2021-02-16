import React from "react";
let timeoutHandle;
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
		console.log(timeString);
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
	return timeoutHandle;
};

export { countDownMinutes };
//https://navaneeth.me/simple-countdown-timer-using-javascript/
//https://stackoverflow.com/questions/40638402/javascript-countdown-timer-with-start-stop-buttons
//https://codesandbox.io/embed/52o442wq8l?codemirror=1&__cf_chl_captcha_tk__=2fc767bf05c6d0993b8a792a308973382d653197-1613477221-0-AV7k5e-Ut2tY2ibjURbiKdKQ3gc7-qCQKB4PZ4BibLcI9yLEgKdxsQTngvPVDIdQZ-dl0pZh_FKvYL3oJBw-e5CZY7Vrvos6pX4nahlPzvbyWICDTrRy0QbiA8DB1eoZ00i0s_Z-in68SXW1ipKIIqvriD6obc7vs0kiF5VINCx49Kk7oyTvnRdKytEI97WRXL_zckXvwr91VnN_D0-IBqzoK5tn12iVckBro9CB1w9mkeZb-bZd3Ur8Y_WZgH5pbXQ6cdm1E8u18Qypnjonk5cOp9r3KRfQyLqyVZZJrgqu8OfZWOpOxxjNwEpDx-oFawZtI-bZA342KEeZC4sY4rx4bRDYWCuO0FipZtrfCVhi9-TJFhaaewrAkSvZzZwb7Hp0zRVLfHoDxLNzoMmbpy7WWU9sdfUTOb8zriByHwhOaYwqGiGcqCAC1XX2ZomwcOi4BoYGti73jQz1gUfIMgrxeF1gEcR4Ru_HcB6cmX-pznrx1fLujvGizgshI-y86V6ejqZadDCskMiEvPdztrNsOccmEruYS0X6cEECvmNPRROa1CENvYRGe4Juab9HETP7ktHD8TvzQJgqkrLrxk4
//https://overreacted.io/making-setinterval-declarative-with-react-hooks/