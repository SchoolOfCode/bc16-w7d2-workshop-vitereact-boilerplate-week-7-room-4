import "./hero-section.css"
import 'react'

export default function HeroSection(){
    return (
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
    )
}
