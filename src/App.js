import { Route, HashRouter } from "react-router-dom";

import "./App.css";
import "./assets/css/bootstrap.min.css";
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import PotencyPage from "./containers/PotencyPage";
import CareerPage from "./containers/CareerPage";

function App() {
	return (
		<HashRouter basename="/">
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
			<Route path="/potency" component={PotencyPage} />
			<Route path="/career" component={CareerPage} />
		</HashRouter>
	);
}

export default App;
