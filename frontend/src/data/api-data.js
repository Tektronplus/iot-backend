import axios from "axios";

async function getApi() {
	let dataApi;
	await axios
		.get("http://localhost:9000/message", {
			headers: { "Access-Control-Allow-Origin": "*" },
		})
		.then(function (response) {
			dataApi = response.data;
		});
	return dataApi;
}

function getDateApi(dataApi) {
	return dataApi.map((x) => {
		let date = new Date(x.timestamp);
		return date.toLocaleString("en-GB");
	});
}
function getTemperatureApi(dataApi) {
	return dataApi.map((x) => x.value);
}
function getHumidityApi(dataApi) {
	return dataApi.map((x) => x.hum);
}

export { getApi, getDateApi, getTemperatureApi, getHumidityApi };
