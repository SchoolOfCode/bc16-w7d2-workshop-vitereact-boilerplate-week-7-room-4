import { useState } from "react";
import "./App.css";
import HeroSection from "./hero-section/hero-section";
import ArticleContainer from "./article-container/article-container";

function App() {
	const [count, setCount] = useState(0);

	return (
		
			<div className="container">
				<header className="logo">
					<p>🔥 Fireplace Palace</p>
				</header>

				<HeroSection/>

				<hr className="hidden-hr" />
				<h2>How it works.</h2>
				<hr />
				
				<ArticleContainer/>

				<footer>
					<p>Find us on:</p>
					<p>© Fireplace Palace</p>
					<p>Facebook Instagram Tiktok</p>
					<a href="">info@firepalace.co.uk</a>
				</footer>
			</div>
		
	);
}

export default App;
