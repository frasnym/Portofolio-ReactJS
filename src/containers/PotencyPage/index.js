import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/UI/Card";

export default function PotencyPage() {
	return (
		<Layout>
			<Container>
				<Row>
					<Col md={12} className="pt-5">
						<PageTitle title="Potency Area" />
					</Col>
					<Col md={4} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Backend"
							content={
								<ul>
									<li>
										Javascript-<b>NodeJS</b>-Express
									</li>
									<li>PHP-Codeigniter 3</li>
									<li>PHP-Lumen</li>
								</ul>
							}
						/>
					</Col>
					<Col md={4} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Web Application"
							content={
								<ul>
									<li>HTML</li>
									<li>CSS</li>
									<li>
										Javascript-<b>ReactJS</b>
									</li>
									<li>PHP-Codeigniter 3</li>
								</ul>
							}
						/>
					</Col>
					<Col md={4} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Mobile Application"
							content={
								<ul>
									<li>Flutter-Dart</li>
								</ul>
							}
						/>
					</Col>
					<Col md={6} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Database"
							content={
								<ul>
									<li>MongoDB</li>
									<li>PostgreSQL</li>
									<li>MySQL</li>
								</ul>
							}
						/>
					</Col>
					<Col md={6} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Others"
							content={
								<ul>
									<li>
										<b>MVC</b> pattern architecture
									</li>
									<li>
										Deploy service using <b>cPanel</b>
									</li>
									<li>
										Working with teams using{" "}
										<b>Git source control</b>
									</li>
									<li>Firebase</li>
									<li>
										<b>JWT</b> Authentication - Bearer Auth
									</li>
								</ul>
							}
						/>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
