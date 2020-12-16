import React from "react";
import ButtonNavigation from "./ButtonNavigation/ButtonNavigation";

export default function ButtonNavigations() {
	const urls = [
		{ url: "/about", text: "About Me" },
		{
			url: "/potency",
			text: "Potency",
		},
		{
			url: "/career",
			text: "Career",
		},
		{
			url: "/education",
			text: "Education",
		},
		{
			url: "/others",
			text: "Other Skill",
		},
	];
	return (
		<>
			{urls.map((url) => (
				<ButtonNavigation url={url.url} text={url.text} />
			))}
		</>
	);
}
