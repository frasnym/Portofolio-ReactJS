import React from "react";

export default function AnchorIcon(props) {
	return (
		<a href={props.href} target="_blank" rel="noreferrer">
			{props.icon}
		</a>
	);
}
