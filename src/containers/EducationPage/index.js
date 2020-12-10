import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default function EducationPage() {
	return (
		<Layout>
			<Container>
				<Row>
					<Col md={12} className="pt-5">
						<PageTitle title="Educational History" />
					</Col>
					<Col md={12} className="content pt-3">
						<h2>
							Institute Of Business And Informatics Stikom
							Surabaya
						</h2>
						<i>Years Period: 2011 - 2016</i>
						<br />
						<i>
							Bachelor degree Information Systems Department with{" "}
							<b>GPA 3.57</b>
						</i>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
