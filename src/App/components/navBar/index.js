import Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav  from "react-bootstrap/Nav";
import "./index.css";

const MyNavBar = (props) => {
    const {tab1, image, tab2, tab3, tab4} = props
    return (
    <>
        <top id="home"></top>
         <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
            <Container fluid>
                <Col>
                    <Navbar.Brand id="brand-home-brand" href="#home">
                        <Image id="brand-home-brand-logo"
                        href={`#${tab1}`}
                        src={image}
                        alt="my logo"
                        width="30%"
                        max-height="30%"
                        className="d-inline-block">
                        </Image>
                    </Navbar.Brand>
                </Col>
                <Col></Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav>
                        <Nav.Link href="#home">{tab1}</Nav.Link>
                        <Nav.Link href="#about">{tab2}</Nav.Link>
                        <Nav.Link href="#project">{tab3}</Nav.Link>
                        <Nav.Link href="#contact">{tab4}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
 );
}

export default MyNavBar;
