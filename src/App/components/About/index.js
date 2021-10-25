import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../Resume-Button"
import Image from "react-bootstrap/Image"
import profile from "../../Images/profile.jpg";
import "./index.css"

export default function MyAbout() {
    return(

        <section id="about" className="viewport">
            <Container fluid>
                <br />
                <h1 className="about-text about-title">About Me</h1> 
                <Row>
                    <Col sm={6} xs={12}>
                        <Image id="pro-pic" alt="" src={profile} rounded fluid></Image>
                    </Col>

                    <Col sm={6} xs={12}>
                        <p className="about-text about-paragraph">
                            Hello! As you may have guessed from my logo I am Kyle Whynott.
                        <br /> 
                        <br />
                            Currently, I am a college student starting in Spring 2022 at Cal State University Fullerton. 
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