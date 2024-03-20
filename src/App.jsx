// import { useState } from "react";
import "./App.css";
import HeroSection from "./hero-section/hero-section";
import ArticleContainer from "./article-container/article-container";
import Footer from "./footer/footer";
import footerItems from "./footer/footer-list";
import { dataMap } from "./article-container/article-container";

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

			<ArticleContainer articles={dataMap} />
			<Footer items={footerItems} />
		</div>
	);
}

export default App;
