import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InterestGrid from "./InterestGrid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import placeholder300 from "./300.png";
import { Nav } from "react-bootstrap";
import WorkComponent from "./WorkComponent";
import ProjectsComponent from "./ProjectsComponent";
import ContactComponent from "./ContactComponent";

const SIZE = 6;
const list = new Array(SIZE).fill(0);

// Template from https://github.com/makotot/GhostUI

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
            <Navbar expand={true} sticky="top">
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
                      <Card.Img variant="top" src={placeholder300} />
                      <Card.Body>
                        <Card.Title>Sydney Lawrence</Card.Title>
                        <Card.Subtitle>Current student at Cornell University</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={8}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in aliquet lorem. Aliquam imperdiet vitae ipsum vitae tempus. Donec consequat augue quam, ac ornare nulla tincidunt eu. Proin viverra velit fringilla gravida tristique. Proin viverra nulla a metus sodales, at vulputate neque tempor. Donec viverra mauris eget eros ullamcorper, id posuere ex convallis. Suspendisse et blandit odio, sed convallis velit. Quisque dapibus et augue sed rhoncus. In dignissim ornare velit id pharetra. Pellentesque suscipit vulputate dui, vitae malesuada diam suscipit eget. Mauris sit amet urna vitae diam tempus rutrum. Ut facilisis justo eget diam blandit finibus. Nunc ultrices at diam non sodales. Ut luctus porta varius. Morbi fermentum elit suscipit, facilisis metus et, dapibus tellus. Donec rutrum, orci sed malesuada ornare, lacus nisl consectetur urna, eu dapibus dolor diam sed purus.
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
