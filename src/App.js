import "./App.css";
import CopyRightSection from "./components/CopyRightSection/CopyRightSection";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";

const App = () => {
	return (
		<div>
			<Header />
			<MainSection />
			<CopyRightSection />
		</div>
	);
};

export default App;
