import "react";
// import "./article-container.css"
// import Article from "./article/article.jsx";

const articleData = [
	{
		src: "images/how-it-works-1.png",
		alt: "Fireplace with sofas",
		h3Text: "Give us a call ...",
		pText:
			"Call us and book in a 'Design Consultation' on a date and time to suit you.",
	},
	{
		src: "images/how-it-works-2.png",
		alt: "Person working",
		h3Text: "We come to you ...",
		pText:
			"We come to your home to do an assessment of the space and to your style preference...",
	},
	{
		src: "images/how-it-works-3.png",
		alt: "Person talking",
		h3Text: "We recommend ...",
		pText: "We send you a bespoke set of fireplace recommendations.",
	},
];

// eslint-disable-next-line react-refresh/only-export-components
export const dataMap = articleData.map((obj) => {
	return (
		<article key={obj.h3Text}>
			<img src={obj.src} alt={obj.alt} />
			<h3>{obj.h3Text}</h3>
			<p>{obj.pText}</p>
		</article>
	);
});

// eslint-disable-next-line react/prop-types
export default function ArticleContainer({ articles }) {
	return <section className="article-container">{articles}</section>;
}
