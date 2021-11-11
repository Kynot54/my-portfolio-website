import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../Project-Button"
import Image from "react-bootstrap/Image";
import project from "../../Images/project.jpg";

import "./index.css"

export default function MyProjects() {
    return(
        <section id="project" className="viewport">
            <Container>
                <br />
                <h1 id="projects-title">Projects</h1>
                <Row>
                    <Col sm={6} xs={12}>
                            <h3>Project 1</h3>
                            <br />
                            <p>This is my first project.</p>
                            <br />
                            <Button />
                    </Col>

                    <Col sm={6} xs={12}>
                        <Image alt="" src={project} thumbnail fluid></Image>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={6} xs={12}>
                            <h3>Project 2</h3>
                            <br />
                            <p>
                                This is my second project.
                            </p>
                            <br />
                            <Button />
                    </Col>

                    <Col sm={6} xs={12}>
                        <Image alt="" src={project} thumbnail fluid></Image>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={6} xs={12}>
                            <h3>Project 3</h3>
                            <br />
                            <p>
                                This is my third project.
                            </p>
                            <br />
                            <Button />
                    </Col>

                    <Col sm={6} xs={12}>
                        <Image alt="" src={project} thumbnail fluid></Image>
                    </Col>
                </Row>
            </Container>
        </section>
        );
}