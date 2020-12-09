import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function PageTitle(props) {
	return (
		<h2>
			<span className="content-icon pe-4">
				<NavLink to="/" exact>
					<FaArrowLeft className="icon" />
				</NavLink>
			</span>
			<span>{props.title}</span>
		</h2>
	);
}
