import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logo from "../../Images/logo.svg"
import Image from "react-bootstrap/Image"
import MyButton from "../KnowMore-Button"

import "./index.css"

export default function MyHeader() {
    return (
    <>
        <header id="home" className="viewport">
            <Container fluid>
                <Row>
                    <Col>  <Image src={logo} className="logo" alt="logo" /> </Col>
                </Row>
            <br />
                <MyButton />
            </Container>
        </header>
    </> 
    );
}