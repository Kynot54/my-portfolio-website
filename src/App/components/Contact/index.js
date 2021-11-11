import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MyButton from "../Email-Button"
import "./index.css"

export default function MyHeader() {
    return (
    <>
        <section id="contact" className="viewport">
            <Container>
                <Row>
                    <Col> <h2 id="contact-title" className="contact-text">Get in Contact</h2> </Col>
                </Row>
            <br />
                <Row>
                    <Col>
                        <p className="contact-text">Get in Contact with Me. Click on this Button to Send an Email to Me,
                        or reach out to me on the listed platforms below.</p>
                    </Col>
                </Row>
                <MyButton />
            </Container>
        </section>
    </> 
    );
}