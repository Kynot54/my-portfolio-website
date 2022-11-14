import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import {button} from "../../data.js"

import "./index.css"

const MyHeader = (props) => {
    const {title, paragraph} = props
    return (
    <>
        <section id="contact" className="viewport">
            <Container>
                <Row>
                    <Col> <h2 id="title" className="text">{title}</h2> </Col>
                </Row>
            <br />
                <Row>
                    <Col>
                        <p className="text">{paragraph}</p>
                    </Col>
                </Row>
                <Row id="email-container">
                <Col>
                    <Button id={`${button[4].id}`} variant={`${button[4].variantType}`} href={`${button[4].hLink}`} size={`${button[4].size}`}> {`${button[4].name}`} </Button>
                </Col>
            </Row>
            </Container>
        </section>
    </> 
    );
}

export default MyHeader