import React from "react";
const Display = ({ count, label }) => {
	return (
		<>
		<div id={label + "-label"}>
			{label} 
		</div>
		<div id={label + "-length"}>
			{count}
		</div>
		</>
	);
};
export default Display;
