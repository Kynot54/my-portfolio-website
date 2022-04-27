import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../Resume-Button"
import Image from "react-bootstrap/Image"
import profile from "../../Images/profile.webp";
import "./index.css"

export default function MyAbout() {
    return(
        <section id="about" className="viewport">
            <Container fluid>
                <br />
                <h2 className="about-text about-title">About Me</h2> 
                <Row>
                    <Col sm={6} xs={12}>
                        <Image id="pro-pic" alt="" src={profile} rounded fluid></Image>
                    </Col>

                    <Col sm={6} xs={12}>
                        <p className="about-text about-paragraph">
                            Hello! I am Kyle Whynott.
                        <br /> 
                        <br />
                            Currently, I am a college student at California State University, Fullerton. 
                            My major is in Computer Science and my focus is on Software Engineering.
                        </p>
                        <br />
                        <Button />
                    </Col>
                </Row>
            </Container>
        </section>
        );
}