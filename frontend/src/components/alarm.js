import { useEffect, useState } from "react";
import { getApi } from "../data/api-data";

const Alarm = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [timestampAlarm, setTimestampAlarm] = useState("false");
	const [isAlarm, setIsAlarm] = useState(false);

	function getAlarmData() {
		getApi("http://localhost:9000/alarms").then((dataApi) => {
			setTimestampAlarm(new Date(dataApi[0].timestamp).toLocaleString("en-GB"));
			setIsAlarm(dataApi[0].isAlarm);
			setIsLoading(false);
		});
	}

	function updatingApi() {
		setInterval(() => {
			getAlarmData();
		}, 5000);
	}

	useEffect(() => {
		getAlarmData();
		updatingApi();
	});

	return (
		<div>
			{isLoading ? null : isAlarm ? (
				<h1> Alarm {timestampAlarm} </h1>
			) : (
				<h1>Not Alarm {timestampAlarm}</h1>
			)}
		</div>
	);
};

export { Alarm };
