import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import Layout from "../../components/Layout";
import Avatar from "../../assets/images/avatar.jpg";
import "./style.css";
import ButtonNavigations from "../../components/ButtonNavigations/ButtonNavigations";
import AnchorNavigations from "../../components/AnchorNavigations/AnchorNavigations";

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
						<AnchorNavigations />
					</Col>
					<Col md={12} className="pt-5 page__nav">
						<ButtonNavigations />
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
