import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const ChartJs = ({ data }) => {
	const options = {
		responsive: true,
	};
	return (
		<div>
			<Line
				options={options}
				data={data}
			/>
		</div>
	);
};

export default ChartJs;
