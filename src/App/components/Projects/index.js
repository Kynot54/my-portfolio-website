import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import project from "../../Images/project.webp";
import doblin from "../../Images/Doblin.webp";

import "./index.css"

export default function MyProjects() {
    return(
        <section id="project" className="viewport">
            <Container>
                <br />
                <h2 id="projects-title">Projects</h2>
                <Row>
                    <Col sm={6} xs={12}>
                            <h3>Doblin Dimension</h3>
                            <br />
                            <p><span className="tab"></span> This is a recent project that my cohorts 
                            and I did to showcase for our school's Hack-A-Thon, Tuffy Hacks 2022. 
                            Although, admittedly not a fairly advanced or large scale project 
                            I still felt that it deserved a spot on the site to showcase our ability to work together as a team 
                            and create something for fun! </p>
                            <br />
                            <Row>
                                <Col>
                                    <Button className="project-button" variant="outline-primary" size="lg" href={"https://devpost.com/software/goblin-dimension-tuffy-hacks2022"}>See More</Button>
                                </Col>
                                <Col>
                                    <Button className="project-button" variant="outline-primary" size="lg" href={"https://github.com/Kynot54/Doblin-Dimension-Tuffy-Hacks2022"}>Source Code</Button>
                                </Col>
                            </Row>
                    </Col>

                    <Col sm={6} xs={12}>
                        <Image alt="" src={doblin} thumbnail fluid></Image>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={6} xs={12}>
                            <h3>Project 2</h3>
                            <br />
                            <p>
                                To be determined.
                            </p>
                            <br />
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
                                To be determined.
                            </p>
                            <br />
                    </Col>

                    <Col sm={6} xs={12}>
                        <Image alt="" src={project} thumbnail fluid></Image>
                    </Col>
                </Row>
            </Container>
        </section>
        );
}