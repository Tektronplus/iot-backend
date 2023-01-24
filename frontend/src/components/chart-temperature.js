import ChartJs from "./chart";
import { getApi, getDateApi, getTemperatureApi } from "../data/api-data";
import { useState, useEffect } from "react";

const ChartTemperature = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [chartData, setChartData] = useState({});

	function getChartData() {
		getApi().then((dataApi) => {
			let labels = getDateApi(dataApi);
			let data = getTemperatureApi(dataApi);

			setChartData({
				labels: labels,
				datasets: [
					{
						label: "Temperature",
						data: data,
						borderColor: 'rgb(255, 99, 132)',
						backgroundColor: 'rgb(255, 99, 132, 0.6)',
					},
				],
			});
			
			setIsLoading(false);
		});
	}

	function updatingApi() {
		setInterval(() => {
			getChartData();
		}, 5000);
	}

	useEffect(() => {
		getChartData();
		updatingApi();
	});

	return <div>{isLoading ? null : <ChartJs data={chartData} />}</div>;
};

export default ChartTemperature;