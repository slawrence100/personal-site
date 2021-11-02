// Logo images
import aws_logo from "./aws-logo.png";
import arduino_logo from "./arduino-logo.png";
import docker_logo from "./docker-logo.png";
import git_logo from './git-logo.png';
import java_logo from './java-logo.png';
import python_logo from './python-logo.png';

// Bootstrap
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default function LogoList(props: {ids: string[]}) {
  return (
    <Row>
      {props.ids.map((id) => <Logo name={id} />)}
    </Row>
  )
}

function Logo(props: {name: string}) {
  const nameToImage = new Map([
    ["aws", aws_logo],
    ["arduino", arduino_logo],
    ["docker", docker_logo],
    ["git", git_logo],
    ["java", java_logo],
    ["python", python_logo]
  ]);
  const nameToTitle = new Map([
    ["aws", "Amazon Web Services"],
    ["arduino", "Arduino"],
    ["docker", "Docker"],
    ["git", "Git"],
    ["java", "Java"],
    ["python", "Python"]
  ])
  const name = props.name;

  return (
    <Card style={{ width: '160px', maxWidth: "40vw" }}>
      <Card.Img 
        variant="top" 
        src={nameToImage.get(name)} 
        style={{padding: "10px"}}  
      /> 
      <Card.Title>{nameToTitle.get(name)}</Card.Title>
    </Card>
  )
}