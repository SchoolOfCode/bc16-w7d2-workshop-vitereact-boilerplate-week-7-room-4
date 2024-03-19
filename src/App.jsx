// import { useState } from "react";
import "./App.css";
import HeroSection from "./hero-section/hero-section";
import ArticleContainer from "./article-container/article-container";
import Footer from "./footer/footer";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className="container">
			<header className="logo">
				<p>🔥 Fireplace Palace</p>
			</header>

			<HeroSection />

			<hr className="hidden-hr" />
			<h2>How it works.</h2>
			<hr />

			<ArticleContainer />
			<Footer
				text1={"Find us on:"}
				text2={"© Fireplace Palace"}
				text3={"Facebook Instagram Tiktok"}
				anchor={"info@firepalace.co.uk"}
			/>
		</div>
	);
}

export default App;
