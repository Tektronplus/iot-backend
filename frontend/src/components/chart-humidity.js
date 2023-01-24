import ChartJs from "./chart";
import { useEffect, useState } from "react";
import { getApi, getDateApi, getHumidityApi } from "../data/api-data";

const ChartHumidity = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [chartData, setChartData] = useState({});

	function getChartData() {
		getApi().then((dataApi) => {
			let labels = getDateApi(dataApi);
			let data = getHumidityApi(dataApi);

			setChartData({
				labels: labels,
				datasets: [
					{
						label: "Humidity",
						data: data,
						borderColor: 'rgb(53, 162, 235)',
						backgroundColor: 'rgb(53, 162, 235, 0.6)',
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

export default ChartHumidity;
