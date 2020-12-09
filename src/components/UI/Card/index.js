import React from "react";
import { Card } from "react-bootstrap";

export default function NewCard(props) {
	return (
		<Card bg={props.bgcolor} className="h-100">
			<Card.Header>{props.header}</Card.Header>
			<Card.Body>
				<Card.Text>{props.content}</Card.Text>
			</Card.Body>
		</Card>
	);
}
