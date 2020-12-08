import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import "./App.css";
import "./assets/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/about" component={AboutPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
