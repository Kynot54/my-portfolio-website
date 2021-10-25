import Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav  from "react-bootstrap/Nav";
import logo from "../../Images/logo_no_title.svg";

import "./index.css";

export default function MyNavBar() {
    return (
    <>
         <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
            <Container fluid>
                <Col>
                    <Navbar.Brand id="brand" href="#home">
                        <Image
                        src={logo}
                        alt=""
                        width="100%"
                        max-height="90%"
                        className="d-inline-block">
                        </Image>
                    </Navbar.Brand>
                </Col>
                <Col></Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#project">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
 );
}
