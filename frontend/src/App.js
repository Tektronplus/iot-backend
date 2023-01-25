import "./App.css";
import { AlarmManager } from "./components/alarm-manager";
import ChartManager from "./components/chart-manager";

function App() {
	return (
		<div className="App">
			<div id="container-components">
				<ChartManager id="chart"/>
				<AlarmManager id="alarm"/>
			</div>
		</div>
	);
}

export default App;
