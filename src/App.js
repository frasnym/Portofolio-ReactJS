import { Route, HashRouter } from "react-router-dom";

import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import PotencyPage from "./containers/PotencyPage";

function App() {
	return (
		<HashRouter basename="/">
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
			<Route path="/potency" component={PotencyPage} />
		</HashRouter>
	);
}

export default App;
