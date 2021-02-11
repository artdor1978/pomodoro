import React, { useState } from "react";
export const Timer = (props) => {
	const [count, setCount] = useState(props.timeInit);
	return (
		<>
			<button onClick={() => setCount((currentCount) => currentCount - 1)}>
				-
			</button>
			{count}
			<button onClick={() => setCount((currentCount) => currentCount + 1)}>
				+
			</button>
		</>
	);
};
