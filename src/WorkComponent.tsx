import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import placeholder300 from "./300.png";
import LogoList from "./Logo";
export default function WorkComponent() {


  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={placeholder300} />
            <Card.Body>
              <Card.Title>Amazon Robotics</Card.Title>
              <Card.Subtitle>Westboro, MA (Remote)</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique eros eros, id rhoncus arcu tempus ut. Nullam sed metus ut magna lacinia pulvinar. Pellentesque vitae nulla vitae dui eleifend faucibus eu sit amet nisl. Curabitur sed leo in enim dictum gravida.</p>
          </div>
          <div>
            <h5> Skills Used</h5>
            <LogoList ids={["react", "python", "git", "typescript"]} />
          </div>

        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={placeholder300} />
            <Card.Body>
              <Card.Title>The MITRE Corporation</Card.Title>
              <Card.Subtitle>Bedford, MA (Remote)</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique eros eros, id rhoncus arcu tempus ut. Nullam sed metus ut magna lacinia pulvinar. Pellentesque vitae nulla vitae dui eleifend faucibus eu sit amet nisl. Curabitur sed leo in enim dictum gravida.</p>
          </div>
          <div>
            <h5> Skills Used</h5>
            <LogoList ids={["ansible", "kubernetes", "git"]} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
