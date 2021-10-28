import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InterestGrid from "./InterestGrid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import placeholder300 from "./300.png";

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
  ]
  );
  return (
    <Container fluid>
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <>
            <ul
              data-cy="nav-wrapper"
              className="navbar"
            >
              {list.map((_, i) => (
                <li
                  key={i}
                  className={"nav-item " + (
                    currentElementIndexInViewport === i ? "active" : ""
                  )
                  }
                >
                  <a
                    href={indexToId.get(i) + ""}
                    style={{
                      color:
                        currentElementIndexInViewport === i ? "#f00" : "#222"
                    }}
                  >
                    {indexToId.get(i)}
                  </a>
                </li>
              ))}
            </ul>
            <Row ref={sectionRefs[0]}>
              <div id="home" className="centered">
                <Container fluid>
                  <Row>
                    <Col>
                      <h1>Sydney Lawrence</h1>
                      <sub>Software and Robotics Engineer</sub>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in aliquet lorem. Aliquam imperdiet vitae ipsum vitae tempus. Donec consequat augue quam, ac ornare nulla tincidunt eu. Proin viverra velit fringilla gravida tristique. Proin viverra nulla a metus sodales, at vulputate neque tempor. Donec viverra mauris eget eros ullamcorper, id posuere ex convallis. Suspendisse et blandit odio, sed convallis velit. Quisque dapibus et augue sed rhoncus. In dignissim ornare velit id pharetra. Pellentesque suscipit vulputate dui, vitae malesuada diam suscipit eget. Mauris sit amet urna vitae diam tempus rutrum. Ut facilisis justo eget diam blandit finibus. Nunc ultrices at diam non sodales. Ut luctus porta varius. Morbi fermentum elit suscipit, facilisis metus et, dapibus tellus. Donec rutrum, orci sed malesuada ornare, lacus nisl consectetur urna, eu dapibus dolor diam sed purus.
              </p>
            </section>
            <section id="projects" ref={sectionRefs[3]} className={
              currentElementIndexInViewport === 3 ? "active" : ""
            }>
              <h2> Projects </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in aliquet lorem. Aliquam imperdiet vitae ipsum vitae tempus. Donec consequat augue quam, ac ornare nulla tincidunt eu. Proin viverra velit fringilla gravida tristique. Proin viverra nulla a metus sodales, at vulputate neque tempor. Donec viverra mauris eget eros ullamcorper, id posuere ex convallis. Suspendisse et blandit odio, sed convallis velit. Quisque dapibus et augue sed rhoncus. In dignissim ornare velit id pharetra. Pellentesque suscipit vulputate dui, vitae malesuada diam suscipit eget. Mauris sit amet urna vitae diam tempus rutrum. Ut facilisis justo eget diam blandit finibus. Nunc ultrices at diam non sodales. Ut luctus porta varius. Morbi fermentum elit suscipit, facilisis metus et, dapibus tellus. Donec rutrum, orci sed malesuada ornare, lacus nisl consectetur urna, eu dapibus dolor diam sed purus.
              </p>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in aliquet lorem. Aliquam imperdiet vitae ipsum vitae tempus. Donec consequat augue quam, ac ornare nulla tincidunt eu. Proin viverra velit fringilla gravida tristique. Proin viverra nulla a metus sodales, at vulputate neque tempor. Donec viverra mauris eget eros ullamcorper, id posuere ex convallis. Suspendisse et blandit odio, sed convallis velit. Quisque dapibus et augue sed rhoncus. In dignissim ornare velit id pharetra. Pellentesque suscipit vulputate dui, vitae malesuada diam suscipit eget. Mauris sit amet urna vitae diam tempus rutrum. Ut facilisis justo eget diam blandit finibus. Nunc ultrices at diam non sodales. Ut luctus porta varius. Morbi fermentum elit suscipit, facilisis metus et, dapibus tellus. Donec rutrum, orci sed malesuada ornare, lacus nisl consectetur urna, eu dapibus dolor diam sed purus.
              </p>
            </section>
          </>
        )}
      </Scrollspy>
    </Container>
      
  );
}
