import React, { useState } from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

// Images
import journal from './journal.jpeg';
import baking from './baking.jpg';
import sailing from './sailing.jpg';
import flute_band from './flute-band.jpg';
import cooking from './cooking.jpg';
import mandarin from './mandarin.jpg';

interface ModalDescription {
  title: string,
  image: string,
  longDescription: string
}

export default function InterestGrid() {
  const [show, setShow] = useState(false);
  const initModalState: ModalDescription = {
    title: "Title",
    image: "image",
    longDescription: "Long description here"
  }
  const [modalState, setModalState] = useState(initModalState);
  const handleClose = () => setShow(false);

  return (
    <Container>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalState.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image src={modalState.image} style={{ width: "100%" }} />
              </Col>
              <Col>
                <p>
                  {modalState.longDescription}
                </p>
              </Col>
            </Row>
          </Container>

        </Modal.Body>
      </Modal>
      <Row>
        <Col>
          <p style={{textAlign: "center"}}>Click on an interest to learn more</p>
        </Col>
      </Row>
      <Row>
          <Card role="button" className="hoverable interest-card" onClick={() => {
            setModalState({
              title: "Wind Instruments",
              image: flute_band,
              longDescription: "I can play many instruments, including the saxophone, trombone, euphonium, flute, and trumpet."
            })
            setShow(true)
          }}>
            <Card.Img src={flute_band} />
            <Card.Title className="handwritten">Wind Instruments</Card.Title>
          </Card>
          <Card role="button" className="hoverable interest-card" onClick={() => {
            setModalState({
              title: "Mandarin Chinese",
              image: mandarin,
              longDescription: "I am beginning to learn Mandarin Chinese because of family in China and for the intellectual challenge."
            })
            setShow(true)
          }}>
            <Card.Img src={mandarin} />
            <Card.Title className="handwritten">Mandarin Chinese</Card.Title>
          </Card>
          <Card role="button" className="hoverable interest-card" onClick={() => {
            setModalState({
              title: "Cooking",
              image: cooking,
              longDescription: "I enjoy cooking of all cuisines, and my goal is to regularly make healthy and delicious meals."
            })
            setShow(true)
          }}>
            <Card.Img src={cooking} />
            <Card.Title className="handwritten">Cooking</Card.Title>
          </Card>
          <Card role="button" className="hoverable interest-card" onClick={() => {
            setModalState({
              title: "Sailing",
              image: sailing,
              longDescription: "I sailed a 420 around Cayuga Lake as part of a class at Cornell, and I'm fascinated with its physics how fast movement without engines can be."
            })
            setShow(true)
          }}>
            <Card.Img src={sailing} />
            <Card.Title className="handwritten">Sailing</Card.Title>
          </Card>
          <Card role="button" className="hoverable interest-card" onClick={() => {
            setModalState({
              title: "Journaling",
              image: journal,
              longDescription: "I keep a journal of events in my life, and I create a word cloud every quarter to reflect on what has happened."
            })
            setShow(true)
          }}>
            <Card.Img src={journal} />
            <Card.Title className="handwritten">Journaling</Card.Title>
          </Card>
          <Card role="button" className="hoverable interest-card" onClick={() => {
            setModalState({
              title: "Baking",
              image: baking,
              longDescription: "I've made baked goods from a young age, and I am always looking for more challenging and unique recipes and dishes to create."
            })
            setShow(true)
          }}>
            <Card.Img src={baking} />
            <Card.Title className="handwritten">Baking</Card.Title>
          </Card>
      </Row>
    </Container>
  )
}