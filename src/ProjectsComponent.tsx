import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import placeholder300 from "./300.png";


export default function ProjectsComponent() {
  return (
    <Container>
    <Row>
      <Col sm={4}>
        <Card>
          <Card.Img variant="top" src={placeholder300} />
          <Card.Body>
            <Card.Title>Waypoint Navigator</Card.Title>
            <Card.Subtitle>CS 3758: Autonomous Mobile Robots</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique eros eros, id rhoncus arcu tempus ut. Nullam sed metus ut magna lacinia pulvinar. Pellentesque vitae nulla vitae dui eleifend faucibus eu sit amet nisl. Curabitur sed leo in enim dictum gravida.</p>
        </div>
        <div>
          <h5> Skills Used</h5>
        </div>

      </Col>
    </Row>
    <br />
    <Row>
      <Col sm={4}>
        <Card>
          <Card.Img variant="top" src={placeholder300} />
          <Card.Body>
            <Card.Title>Walking Robot</Card.Title>
            <Card.Subtitle>INFO 4320: Rapid Prototyping</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique eros eros, id rhoncus arcu tempus ut. Nullam sed metus ut magna lacinia pulvinar. Pellentesque vitae nulla vitae dui eleifend faucibus eu sit amet nisl. Curabitur sed leo in enim dictum gravida.</p>
        </div>
        <div>
          <h5> Skills Used</h5>
        </div>
      </Col>
    </Row>
  </Container>
  )
}
