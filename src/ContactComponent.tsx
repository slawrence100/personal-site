import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactComponent() {


  return (
    <Container>
      <Row>
        <Col sm={4}>
          <p> Test text here</p>
        </Col>
        <Col>
          <p> More test text</p>
        </Col>
      </Row>
    </Container>
  )
}
