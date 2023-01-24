import ChartJs from "./chart";
import { getApi, getDateApi, getTemperatureApi } from "../data/api-data";
import { useState } from "react";

const ChartTemperature = () => {
	const [labels, setLabels] = useState(['']);
	const [temperature, setTemperature] = useState('');

	setInterval(async () => {
		let dataApi = await getApi();
		setLabels(getDateApi(dataApi));
		setTemperature(getTemperatureApi(dataApi));

		console.log(labels);
		console.log(temperature);
	}, 5000);
	return (
		<ChartJs
			titleJson={"Temperature"}
			labelsJson={labels}
			dataJson={temperature}
			colorRgb={"255, 99, 132"}
		/>
	);
};

export default ChartTemperature;
