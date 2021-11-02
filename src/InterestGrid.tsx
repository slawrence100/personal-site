import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InterestGrid() {

  return (
    <Container>
      <Row>
        <Col>
          <p>Instrument playing</p>
        </Col>
        <Col>
          <p>Mandarin Chinese</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Cooking</p>
        </Col>
        <Col>
          <p>Sailing?</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Journaling?</p>
        </Col>
        <Col>
          <p>Baking</p>
        </Col>
      </Row>
    </Container>
  )
}