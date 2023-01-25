import { useEffect, useState } from "react";
import { getApi, getDateApi } from "../data/api-data";
import { Alarm } from "./alarm";
import './style-alarm.css'

const AlarmManager = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [arrayAlarms, setArrayAlarms] = useState("e");
    const [isAlarm, setIsAlarm] = useState(false);

	function getAlarmData() {
		getApi("http://localhost:9000/alarms").then((dataApi) => {
            setIsAlarm(dataApi[0].isAlarm ? true : false)
			let filteredAlarm = dataApi.filter((alarm) => alarm.isAlarm);
			let arrayAlarmDate = getDateApi(filteredAlarm);
			setArrayAlarms(arrayAlarmDate);
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
            {isAlarm ? <h1>Temperature over 20°</h1> : null}
			<div id="alarm-manager">
				{isLoading ? null : arrayAlarms.map((alarm) => <Alarm alarm={alarm} />)}
			</div>
		</div>
	);
};

export { AlarmManager };
