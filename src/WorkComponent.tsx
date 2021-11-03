import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ar from "./amazon-robotics.jpg";
import mitre from "./mitre-logo.png";

import LogoList from "./Logo";

export default function WorkComponent() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={ar} />
            <Card.Body>
              {/* TODO use a CAROUSEL here! */}
              <Card.Title>Amazon Robotics</Card.Title>
              <Card.Subtitle>Westboro, MA (Remote)</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <p>
              I designed and implemented constructed a robotic schedule visualization proof-of-concept
              to help hasten debugging efforts for high-severity issues, involving independently meeting
              across teams to create the best designs and follow best practices.
            </p>
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
            <Card.Img variant="top" src={mitre} />
            <Card.Body>
              <Card.Title>The MITRE Corporation</Card.Title>
              <Card.Subtitle>Bedford, MA (Remote)</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <p>
              I worked on the Software Factory infrastructure-as-a-service project,
              utilizing Kubernetes, Ansible, and Helm to resolve issues with
              its single-sign-on system and other code quality and site
              reliability services.
            </p>
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