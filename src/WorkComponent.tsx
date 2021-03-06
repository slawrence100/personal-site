import React from "react";

// Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import ar from "./amazon-robotics.jpg";
import ar_work_1 from "./ar-work-1.jpg";
import ar_work_2 from "./ar-work-2.jpg";
import mitre from "./mitre-logo.png";

import resume_pdf from './Sydney_Lawrence_Resume_Dec_2021.pdf';

import LogoList from "./Logo";


export interface WorkItemData {
  title: string,
  subtitle: string,
  company_img: string,
  desc: string,
  img_src: string[],
  img_alt: string[],
  skill_ids: string[],
  include_resume: boolean
}

function range(len: number) : number[] {
  return Array(len).fill(0).map((x,i) => i);
} 

export function WorkItem(skill: string, item: WorkItemData, skillUpdater: Function) {
  const {title, subtitle, company_img, desc, img_src, img_alt, skill_ids, include_resume} = item;
  return (
    <>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src={company_img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle>{subtitle}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <p>{desc}</p>
            {include_resume && (<>
              <Button variant="outline-primary" href={resume_pdf} target="_blank" rel="noreferrer noopener">View my Resumè for more details</Button>
              <br />
              <br />
            </>)}
          </div>
          {img_src.length !== 0 && (<div>
            <h5>Featured Images</h5>
            <Carousel controls={false} variant="dark" className="image-carousel" interval={3000}>
              {range(img_src.length).map((n) => (
                <Carousel.Item>
                  <Image src={img_src[n]} alt={img_alt[n]} fluid />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>)}
          <div>
            <h5> Skills Used</h5>
            <LogoList skill={skill} ids={skill_ids} updater={skillUpdater}/>
          </div>
        </Col>
      </Row>
      <hr />
      <br />
    </>
  )
}


export const data : WorkItemData[] = [
  {
    title: "Amazon Robotics",
    subtitle: "Westboro, MA (Remote)",
    company_img: ar,
    desc: "I designed and implemented a robotic schedule visualization proof-of-concept " +
    "to help hasten debugging efforts for high-severity issues, involving independently meeting " +
    "across teams to create the best designs and follow best practices.",
    img_src: [ar_work_1, ar_work_2],
    img_alt: ["UI Design", "Data diagram"],
    skill_ids: ["aws", "react", "python", "git", "typescript"],
    include_resume: true
  },
  {
    title: "The MITRE Corporation",
    subtitle: "Bedford, MA (Remote)",
    company_img: mitre,
    desc: "I worked on the Software Factory infrastructure-as-a-service project, " +
    "utilizing Kubernetes, Ansible, and Helm to resolve issues with " +
    "its single-sign-on system and other code quality and site reliability services.",
    img_src: [],
    img_alt: [],
    skill_ids: ["ansible", "kubernetes", "git"],
    include_resume: true
  }
]
export default function WorkComponent(props: any) {
  const { skill, skillUpdater } = props;

  return (
    <Container>
      {data.map((d:WorkItemData) => WorkItem(skill, d, skillUpdater))}
    </Container>
  )
}
