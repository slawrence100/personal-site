import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import email_icon from './email-icon.png';
import linkedin_icon from './linkedin-logo.png';

export default function ContactComponent() {


  return (
    <Container>
      <Row>
        <Col>
          <Image src={email_icon} alt="email" roundedCircle style={{maxHeight: "30px", width: "auto"}}/>
          <br />
          <a href="mailto:sll224@cornell.edu">sll224@cornell.edu</a>
        </Col>
        <Col>
          <Image src={linkedin_icon} alt="LinkedIn" roundedCircle style={{maxHeight: "30px", width: "auto"}} />
          <br />
          <a href="https://www.linkedin.com/in/sydney-lawrence/">sydney-lawrence</a>
        </Col>
      </Row>
      <br /> <br />
    </Container>
  )
}
