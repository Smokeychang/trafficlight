import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickColor: null
		};
	}
	render() {
		let clickRed = "";
		let clickYellow = "";
		let clickGreen = "";

		if (this.state.clickColor == "red") {
			clickRed = "glow";
		} else if (this.state.clickColor == "yellow") {
			clickYellow = "glow";
		} else if (this.state.clickColor == "green") {
			clickGreen = "glow";
		}

		return (
			<div className="trafficlight">
				<div
					className={"red " + clickRed}
					onClick={() => this.setState({ clickColor: "red" })}
				/>
				<div
					className={"yellow " + clickYellow}
					onClick={() => this.setState({ clickColor: "yellow" })}
				/>
				<div
					className={"green " + clickGreen}
					onClick={() => this.setState({ clickColor: "green" })}
				/>
			</div>
		);
	}
}
