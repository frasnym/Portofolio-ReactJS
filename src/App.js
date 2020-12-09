import { Route, HashRouter } from "react-router-dom";

import "./App.css";
import "./assets/css/bootstrap.min.css";
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import PotencyPage from "./containers/PotencyPage";
import CareerPage from "./containers/CareerPage";
import EducationPage from "./containers/EducationPage";
import OtherSkillPage from "./containers/OtherSkillPage";

function App() {
	return (
		<HashRouter basename="/">
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
			<Route path="/potency" component={PotencyPage} />
			<Route path="/career" component={CareerPage} />
			<Route path="/education" component={EducationPage} />
			<Route path="/others" component={OtherSkillPage} />
		</HashRouter>
	);
}

export default App;
