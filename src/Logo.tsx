// Logo images
import aws_logo from "./aws-logo.png";
import autodesk_inventor_logo from "./autodesk-inventor-logo.jpg";
import ansible_logo from "./ansible-logo.png";
import arduino_logo from "./arduino-logo.png";
import docker_logo from "./docker-logo.png";
import git_logo from './git-logo.png';
import java_logo from './java-logo.png';
import kubernetes_logo from './kubernetes-logo.png';
import python_logo from './python-logo.png';
import react_logo from './react-logo.png';
import typescript_logo from './typescript-logo.png';
import matlab_logo from "./matlab-logo.png";

// Bootstrap
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default function LogoList(props: { skill: string, ids: string[] }) {
  return (
    <Row>
      {props.ids.map((id) => {
        if (id === props.skill) {
          return (<Logo name={id} selected />)
        }
        return (<Logo name={id} />)
      })}
    </Row>
  )
}

function Logo(props: { name: string, selected?: boolean}) {
  const nameToImage = new Map([
    ["aws", aws_logo],
    ["autodesk-inventor", autodesk_inventor_logo],
    ["ansible", ansible_logo],
    ["arduino", arduino_logo],
    ["docker", docker_logo],
    ["git", git_logo],
    ["java", java_logo],
    ["kubernetes", kubernetes_logo],
    ["python", python_logo],
    ["react", react_logo],
    ["typescript", typescript_logo],
    ["matlab", matlab_logo]
  ]);

  function nameToTitle(name: string): string {
    if (name === "aws") {
      return "Amazon Web Services";
    } else if (name === "autodesk-inventor") {
      return "Autodesk Inventor";
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  const name = props.name;

  return (
    <Card 
      style={{ width: '150px', maxWidth: "30vw" }}
      className={(props.selected) ? "" : "grayout"}
    >
      <Card.Img
        variant="top"
        src={nameToImage.get(name)}
        style={{ padding: "10px", margin: "auto" }}
      />
      <Card.Title>{nameToTitle(name)}</Card.Title>
    </Card>
  )
}