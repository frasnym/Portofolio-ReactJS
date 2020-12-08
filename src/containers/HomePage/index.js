import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
	FaTwitter,
	FaFacebookF,
	FaInstagram,
	FaGithub,
	FaLinkedinIn,
	FaGooglePlay,
	FaRegEnvelope,
} from "react-icons/fa";

import Layout from "../../components/Layout";
import Avatar from "../../assets/images/avatar.jpg";
import "./style.css";
import AnchorIcon from "../../components/UI/AnchorIcon";

export default function HomePage() {
	return (
		<Layout>
			<Container>
				<Row>
					<Col md={12}>
						<Image className="avatar" src={Avatar} />
					</Col>
					<Col md={12} className="pt-5">
						<h1>Hi, I'm Fras</h1>
					</Col>
					<hr />
					<Col md={12} className="content">
						<p>Full-Stack Developer</p>
					</Col>
					<Col md={12} className="pt-3 content content-icon">
						<AnchorIcon
							href="https://twitter.com/frasnym"
							icon={<FaTwitter className="icon" />}
						/>
						<AnchorIcon
							href="https://www.facebook.com/frasnym"
							icon={<FaFacebookF className="icon" />}
						/>
						<AnchorIcon
							href="https://www.instagram.com/frasnym"
							icon={<FaInstagram className="icon" />}
						/>
						<AnchorIcon
							href="https://github.com/frasnym"
							icon={<FaGithub className="icon" />}
						/>
						<AnchorIcon
							href="https://www.linkedin.com/in/frasnym/"
							icon={<FaLinkedinIn className="icon" />}
						/>
						<AnchorIcon
							href="https://play.google.com/store/apps/developer?id=FrastyawanNym"
							icon={<FaGooglePlay className="icon" />}
						/>
						<AnchorIcon
							href="mailto:frastyawan.nym@gmail.com"
							icon={<FaRegEnvelope className="icon" />}
						/>
					</Col>
					<Col md={12} className="pt-5">
						<NavLink
							to="/about"
							className="btn btn-outline-secondary btn-lg"
						>
							About Me
						</NavLink>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
