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
						<p>Coming Soon</p>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
