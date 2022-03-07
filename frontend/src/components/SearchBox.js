import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
	const [keyword, setKeyword] = useState("");

	let history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword) {
			history.push(`/?keyword=${keyword}`);
		} else {
			history.push(history.push(history.location.pathname));
		}
	};
	return (
		<Form onSubmit={submitHandler} inline>
			<Row className="align-items-center">
				<Col xs={8}>
					<Form.Control
						type="text"
						name="q"
						onChange={(e) => setKeyword(e.target.value)}
						className="mr-sm-2 ml-sm-5"
					></Form.Control>
				</Col>
				<Col xs={4}>
					<Button type="submit" variant="outline-success" className="p-2">
						Submit
					</Button>
				</Col>
			</Row>
		</Form>
	);
}

export default SearchBox;
