import React from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Images
import journal from './journal.jpeg';
import baking from './baking.jpg';
import sailing from './sailing.jpg';
import flute_band from './flute-band.jpg';
import cooking from './cooking.jpg';
import mandarin from './mandarin.jpg';

export default function InterestGrid() {

  return (
    <Container>
      <Row>
        <Col>
        <Card>
            <Card.Img src={flute_band} />
            <Card.Title className="handwritten">Wind Instruments</Card.Title>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img src={mandarin} />
            <Card.Title className="handwritten">Mandarin Chinese</Card.Title>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card>
            <Card.Img src={cooking} />
            <Card.Title className="handwritten">Cooking</Card.Title>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img src={sailing} />
            <Card.Title className="handwritten">Sailing</Card.Title>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img src={journal} />
            <Card.Title className="handwritten">Journaling</Card.Title>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img src={baking} />
            <Card.Title className="handwritten">Baking</Card.Title>
          </Card>
          </Col>
      </Row>
    </Container>
  )
}