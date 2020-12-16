import React from "react";
import { NavLink } from "react-router-dom";

export default function ButtonNavigation(props) {
	return (
		<NavLink
			to={props.url}
			className="btn btn-outline-secondary btn-lg mt-3"
		>
			{props.text}
		</NavLink>
	);
}
