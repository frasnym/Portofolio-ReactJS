import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default function OtherSkillPage() {
	return (
		<Layout>
			<Container>
				<Row>
					<Col md={12} className="pt-5">
						<PageTitle title="Others Skill" />
					</Col>
					<Col md={12} className="content pt-3">
						<h2>Language skill</h2>
						<ul>
							<li>Indonesia (Bahasa) - native speaker</li>
							<li>English - basic communication skill</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
