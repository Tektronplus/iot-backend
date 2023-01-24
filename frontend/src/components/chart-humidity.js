import ChartJs from "./chart";
import { getApi, getDateApi, getTemperatureApi } from "../data/api-data";
import { useState } from "react";

const ChartHumidity = () => {
	const [labels, setLabels] = useState("");
	const [humidity, setHumidity] = useState("");

	setInterval(async () => {
		let dataApi = await getApi();
		setLabels(getDateApi(dataApi));
		setHumidity(getTemperatureApi(dataApi));

		console.log(labels);
		console.log(humidity);
	}, 5000);
	return (
		<ChartJs
			titleJson={"Humidity"}
			labelsJson={labels}
			dataJson={humidity}
			colorRgb={"53, 162, 235"}
		/>
	);
};

export default ChartHumidity;
