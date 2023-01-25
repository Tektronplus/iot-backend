import axios from "axios";

async function getApi(url) {
	let data = await axios
		.get(url, {
			headers: { "Access-Control-Allow-Origin": "*" },
		})
		.then((res) => res.data);
	return data;
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
