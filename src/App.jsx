// import { useState } from "react";
import "./App.css";
import HeroSection from "./hero-section/hero-section";
import ArticleContainer from "./article-container/article-container";
import Footer from "./footer/footer";

function App() {
	// const [count, setCount] = useState(0);
	let textArray = ["Find us on:", "© Fireplace Palace", "Facebook Instagram Tiktok", "info@firepalace.co.uk"]
	let footerItems = textArray.map((text) => text.includes("@") ? <a key={text} href ="">{text}</a> : <p key={text}>{text}</p>);
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
				footerItems = {footerItems}
			/>
		</div>
	);
}

export default App;
