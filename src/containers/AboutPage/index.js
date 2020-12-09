import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Layout from "../../components/Layout";

export default function AboutPage() {
	return (
		<Layout>
			<Container>
				<Row>
					<Col md={12} className="pt-5">
						<h2>
							<span className="content-icon pe-4">
								<NavLink to="/" exact>
									<FaArrowLeft className="icon" />
								</NavLink>
							</span>
							<span>About me</span>
						</h2>
					</Col>
					<Col md={8} className="content">
						<p>
							I'm a software engineer. I have high interest on
							programming and enjoy developing new things.
						</p>
						<p>
							Currently, I am looking for a Backend Developer
							role.
						</p>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
