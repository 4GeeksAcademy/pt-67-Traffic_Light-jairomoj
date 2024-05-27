import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	function lightOn(colorSelected) {
		setColor(colorSelected);
	}

	return (
		<div className="text-center traffic-light">
			<div className={`light red ${color === "red" ? "light-on" : ""}`} onClick={() => lightOn("red")}></div>

			<div className={`light yellow ${color === "yellow" ? "light-on" : ""}`} onClick={() => lightOn("yellow")}></div>

			<div className={`light green ${color === "green" ? "light-on" : ""}`} onClick={() => lightOn("green")}></div>
		</div>
	);
};

export default Home;
