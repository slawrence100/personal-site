import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InterestGrid() {

  return (
    <Container>
      <Row>
        <Col>
          <p>Top Left</p>
        </Col>
        <Col>
          <p>Top Right</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Bottom Left</p>
        </Col>
        <Col>
          <p>Bottom Right</p>
        </Col>
      </Row>
    </Container>
  )
}