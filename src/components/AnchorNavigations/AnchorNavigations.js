import React from "react";
import {
	FaTwitter,
	FaFacebookF,
	FaInstagram,
	FaGithub,
	FaLinkedinIn,
	FaGooglePlay,
	FaRegEnvelope,
} from "react-icons/fa";

import AnchorIcon from "../UI/AnchorIcon";

export default function AnchorNavigations() {
	const anchorIcons = [
		{
			href: "https://twitter.com/frasnym",
			icon: <FaTwitter className="icon" />,
		},
		{
			href: "https://www.facebook.com/frasnym",
			icon: <FaFacebookF className="icon" />,
		},
		{
			href: "https://www.instagram.com/frasnym",
			icon: <FaInstagram className="icon" />,
		},
		{
			href: "https://github.com/frasnym",
			icon: <FaGithub className="icon" />,
		},
		{
			href: "https://www.linkedin.com/in/frasnym/",
			icon: <FaLinkedinIn className="icon" />,
		},
		{
			href:
				"https://play.google.com/store/apps/developer?id=FrastyawanNym",
			icon: <FaGooglePlay className="icon" />,
		},
		{
			href: "mailto:frastyawan.nym@gmail.com",
			icon: <FaRegEnvelope className="icon" />,
		},
	];
	return (
		<>
			{anchorIcons.map((aIcon) => {
				return (
					<AnchorIcon
						href={aIcon.href}
						icon={aIcon.icon}
						target="_blank"
						rel="noreferrer"
					/>
				);
			})}
		</>
	);
}
