import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../components/Layout";

export default function AboutPage() {
	return (
		<Layout>
			<Container>
				<Row>
					<Col md={12} className="pt-5">
						<h2>About me</h2>
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
