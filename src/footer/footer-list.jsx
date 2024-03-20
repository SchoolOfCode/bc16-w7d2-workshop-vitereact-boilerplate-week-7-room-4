let textArray = [
	"Find us on:",
	"© Fireplace Palace",
	"Facebook Instagram Tiktok",
	"info@firepalace.co.uk",
];
let footerItems = textArray.map((text) => {
	return text.includes("@") ? (
		<a key={text} href="">
			{text}
		</a>
	) : (
		<p key={text}>{text}</p>
	);
});

export default footerItems;
