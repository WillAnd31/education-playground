import * as React from "react";

interface chartInterface {
	chartConfig: any;
	name: string;
	class?: string;
}

export class ChartComponent extends React.Component<chartInterface, {}> {
	render () {
		return <canvas onLoad={this.init}
			id={this.props.name}
			className={this.props.class}
			width="400"
			height="400">
		</canvas>
	}

	constructor () {
		super();

		if (!this.props) return;
		let chartElm = document.getElementById(this.props.name);
		if (!chartElm) return;
		new Chart(
			chartElm,
			this.props.chartConfig
		);
	}

	init () {
		console.log('hi');
	}

}