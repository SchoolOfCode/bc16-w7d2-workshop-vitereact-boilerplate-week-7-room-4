import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		
			<div className="container">
				<header className="logo">
					<p>🔥 Fireplace Palace</p>
				</header>

				<section className="hero-section">
					<img
						className="hero-image"
						src="/images/hero-mobile.png"
						alt="Fireplace Image"
					/>

					<div className="orange-box-container">
						<section className="orange-box">
							<h1>Discover the Perfect Fireplace ...</h1>
							<p>
								Book consultation:{" "}
								<span className="phone-number">0121 345 6789</span>
							</p>
						</section>
					</div>
				</section>
				<hr className="hidden-hr" />
				<h2>How it works.</h2>
				<hr />
				<section className="article-container">
					<article>
						<img src="images/how-it-works-1.png" alt="Fireplace with sofas" />
						<h3>Give us a call ...</h3>
						<p>
							Call us and book in a "Design Consultation" on a date and time to
							suit you.
						</p>
					</article>
					<hr />
					<article>
						<img src="images/how-it-works-2.png" alt="Person working" />
						<h3>We come to you ...</h3>
						<p>
							We come to your home to do an assessment of the space and to your
							style preference.
						</p>
					</article>
					<hr />
					<article>
						<img src="images/how-it-works-3.png" alt="Person talking" />
						<h3>We recommend ...</h3>
						<p>We send you a bespoke set of fireplace recommendations.</p>
					</article>
				</section>
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
