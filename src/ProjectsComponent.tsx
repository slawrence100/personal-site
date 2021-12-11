import React from "react";

import LogoList from './Logo';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

// Images
import amr_map from "./amr-planners.png"
import walking_robot from "./walking-robot-short.gif";
import minibot from "./minibot.png";
import minibot_project_1 from "./minibot-project-1.png";
import minibot_project_2 from "./minibot-project-2.png";
import minibot_project_3 from "./minibot-project-3.jpg";

import resume_pdf from './Sydney_Lawrence_Resume_Dec_2021.pdf';

import "./App.css";

export default function ProjectsComponent(props : any) {
  const { skill, skillUpdater } = props;
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={amr_map} />
            <Card.Body>
              <Card.Title>Waypoint Navigator</Card.Title>
              <Card.Subtitle>CS 3758: Autonomous Mobile Robots</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <p>
              The final project for CS 3758 involved implementing a path planning algorithm for a simluated
              Roomba-like robot with two other students to visit as many waypoints as possible in a time limit.
            </p>
            <Button variant="outline-primary" href={resume_pdf} target="_blank" rel="noreferrer noopener">View my Resumè for more details</Button>
            <br />
            <br />
          </div>
          <div>
            <h5>Skills Used</h5>
            <LogoList skill={skill} ids={["git", "matlab"]} updater={skillUpdater} />
          </div>
        </Col>
      </Row>
      <hr />
      <br />
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={walking_robot} />
            <Card.Body>
              <Card.Title>Walking Robot</Card.Title>
              <Card.Subtitle>INFO 4320: Rapid Prototyping</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <p>
              A quadruped robot created for the final group project of INFO 4320.
              My major contributions include the entire electrical and software systems of the robot.
            </p>
          </div>
          <div>
            <h5> Skills Used</h5>
            <LogoList skill={skill} ids={["arduino", "python", "autodesk-inventor"]} updater={skillUpdater} />
          </div>
        </Col>
      </Row>
      <hr />
      <br />
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={minibot} />
            <Card.Body>
              <Card.Title>miniBot</Card.Title>
              <Card.Subtitle>Cornell Cup Robotics Project Team</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <p>
              An educational, cost-effective robotics platform with an innovative computer vision system.
              My major contributions include interfacing across teams as CS lead, creating the user program interpretation system,
              redesigning the computer vision system,and writing an enhanced message protocol on the robot's
              onboard embedded system to facilitate simulation efforts.
            </p>
            <Button variant="outline-primary" href={resume_pdf} target="_blank" rel="noreferrer noopener">View my Resumè for more details</Button>
            <br />
            <br />
          </div>
          <div>
            <h5>Featured Images</h5>
            <Carousel controls={false} variant="dark" className="img-carousel" interval={3000}>
              <Carousel.Item>
                <Image src={minibot_project_1} fluid style={{maxHeight: "400px", margin: "auto" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={minibot_project_2} fluid style={{maxHeight: "400px", margin: "auto" }} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={minibot_project_3} fluid style={{maxHeight: "400px", margin: "auto" }} />
                </Carousel.Item>
            </Carousel>
            </div>
          <div>
            <h5> Skills Used</h5>
            <LogoList skill={skill} ids={["arduino", "python", "react"]} updater={skillUpdater}/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
