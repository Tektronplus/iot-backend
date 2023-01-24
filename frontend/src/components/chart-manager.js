import { useState } from "react";
import ChartTemperature from "./chart-temperature";
import ChartHumidity from "./chart-humidity";
import "./style.css";
import { Alarm } from "./alarm";

const ChartManager = () => {
	const [chartShown, setChartShown] = useState("");

	return (
		<div>
			<div
				id="container-buttons-chart"
				className="container">
				<button
					id="button-temperature"
					className="button-chart"
					onClick={() => setChartShown("temperature")}>
					Temperature
				</button>
				<button
					id="button-humidity"
					className="button-chart"
					onClick={() => setChartShown("humidity")}>
					Humidity
				</button>
			</div>

			<div id="container-chart">
				{chartShown === "temperature" ? (
					<ChartTemperature />
				) : (
					<ChartHumidity />
				)}
			</div>
			<Alarm/>
		</div>
	);
};

export default ChartManager;
