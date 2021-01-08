import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/UI/Card";

export default function CareerPage() {
	return (
		<Layout>
			<Container>
				<Row>
					<Col md={12} className="pt-5">
						<PageTitle title="Career History" />
					</Col>
					<Col md={12} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Full-stack Developer at PT. Eklanku Indonesia Cemerlang"
							headerSubtitle="December 2017 – December 2020"
							content={
								<ul>
									<li>
										Developing <b>company profile</b>{" "}
										website
									</li>
									<li>
										Developing <b>customer area</b> website
									</li>
									<li>
										Developing <b>admin panel</b> website
									</li>
									<li>
										Creating <b>API services</b> to support
										Finance mobile application
									</li>
									<li>
										Creating <b>API services</b> to support
										Travel mobile application
									</li>
									<li>
										Developing database structure using{" "}
										<b>SQL database</b>
									</li>
									<li>
										Creating <b>microservice</b> to support
										customer transaction
									</li>
									<li>
										Creating API services that support{" "}
										<b>multi-language</b>
									</li>
									<li>
										Integrating payment using{" "}
										<b>Payment Gateway</b>
									</li>
								</ul>
							}
						/>
					</Col>
					<Col md={12} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Freelance as Back-End Developer"
							headerSubtitle="March 2020 – Now"
							content={
								<ul>
									<li>
										Creating <b>API services</b> to support
										Travel mobile application
									</li>
									<li>
										Creating <b>API services</b> to support
										Admin web panel
									</li>
								</ul>
							}
						/>
					</Col>
					<Col md={12} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Mobile Application Developer on Personal Project"
							headerSubtitle="July 2020 – Now"
							content={
								<ul>
									<li>
										<b>Catering</b> application:{" "}
										<a
											href="https://play.google.com/store/apps/details?id=com.frasnym.catering_app"
											target="_blank"
											rel="noreferrer"
										>
											Application URL
										</a>
									</li>
									<li>
										<b>Instagram</b> re-design application
									</li>
									<li>
										<b>Properly marketing</b> application:{" "}
										<a
											href="https://play.google.com/store/apps/details?id=com.frasnym.gensela_properti"
											target="_blank"
											rel="noreferrer"
										>
											Application URL
										</a>
									</li>
								</ul>
							}
						/>
					</Col>
					<Col md={12} className="content pt-3">
						<Card
							bgcolor="dark"
							header="Back-End Developer on Personal Project"
							headerSubtitle="July 2020 – Now"
							content={
								<ul>
									<li>
										Membership API - <b>NodeJS</b>:{" "}
										<a
											href="https://github.com/frasnym/Basic-Membership-NodeJS-API"
											target="_blank"
											rel="noreferrer"
										>
											Application URL
										</a>
									</li>
									<li>
										Web scraping - <b>NodeJS</b>:{" "}
										<a
											href="https://github.com/frasnym/Kurs-Scraping-NodeJS-cheerio"
											target="_blank"
											rel="noreferrer"
										>
											Application URL
										</a>
									</li>
									<li>
										Get Twitter real-time updates -{" "}
										<b>NodeJS</b>
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
