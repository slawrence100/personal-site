import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InterestGrid from "./InterestGrid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css";
import work_photo from './work-photo-small.jpg'
import WorkComponent from "./WorkComponent";
import ProjectsComponent from "./ProjectsComponent";
import ContactComponent from "./ContactComponent";

const SIZE = 6;
const list = new Array(SIZE).fill(0);

// Template from example in https://github.com/makotot/GhostUI

export default function App() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  const indexToId = new Map([
    [0, "#home"],
    [1, "#about"],
    [2, "#work"],
    [3, "#projects"],
    [4, "#interests"],
    [5, "#contact"]
  ]);
  function nameToTitle(name: any): string {
    return name.charAt(1).toUpperCase() + name.slice(2);
  }
  return (
    <Container fluid>
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <>
            
            <Navbar expand={"sm"} sticky="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                {
                  list.map((_, i) => {
                    const name = indexToId.get(i);
                    if (i === currentElementIndexInViewport) {
                      return (
                        <Nav.Link href={name}>
                          {nameToTitle(name)}
                        </Nav.Link>
                      )
                    }
                    return (
                      <Nav.Link href={name} className="nav-link">{nameToTitle(name)}</Nav.Link>
                    )
                  })
                }
              </Nav>
              </Navbar.Collapse>
            </Navbar>
            
            <Row ref={sectionRefs[0]}>
              <div id="home" className="centered">
                <Container fluid>
                  <Row>
                    <Col>
                      <h1 className="roboto">Sydney Lawrence</h1>
                      <sub className="code">Software and Robotics Engineer</sub>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Row>
            <section id="about" ref={sectionRefs[1]} className={
              currentElementIndexInViewport === 1 ? "active" : ""
            }>
              <h2> About and Mission </h2>
              <Container fluid>
                <Row>
                  <Col sm={4}>
                    <Card>
                      <Card.Img variant="top" src={work_photo} />
                      <Card.Body>
                        <Card.Title>Sydney Lawrence</Card.Title>
                        <Card.Subtitle>Current student at Cornell University</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={8}>
                    <p>
                      I am a current student at Cornell University studying Computer Science with the Robotics minor.
                      My career goals are to constantly learn and apply new technological knowledge to create impact
                      on the world around me.
                    </p>
                    <br />
                    <Form>
                      <Form.Label>Search for my skills</Form.Label>
                      <Form.Control type="text" placeholder="Kubernetes, Teamwork, ROS..." />
                      <Button variant="primary" type="submit"> Go </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </section>
            <section id="work" ref={sectionRefs[2]} className={
              currentElementIndexInViewport === 2 ? "active" : ""
            }>
              <h2> Work </h2>
              <WorkComponent />
            </section>
            <section id="projects" ref={sectionRefs[3]} className={
              currentElementIndexInViewport === 3 ? "active" : ""
            }>
              <h2> Projects </h2>
              <ProjectsComponent />
            </section>
            <section id="interests" ref={sectionRefs[4]} className={
              currentElementIndexInViewport === 4 ? "active" : ""
            }>
              <h2> Interests </h2>
              <InterestGrid />
            </section>
            <section id="contact" ref={sectionRefs[5]} className={
              currentElementIndexInViewport === 5 ? "active" : ""
            }>
              <h2> Contact </h2>
              <ContactComponent />
            </section>
          </>
        )}
      </Scrollspy>
    </Container>

  );
}