import "./footer.css";

export default function Footer(props) {
	return (
		<footer>
			<p>{props.text1}</p>
			<p>{props.text2}</p>
			<p>{props.text3}</p>
			<a href="">{props.anchor}</a>
		</footer>
	);
}
