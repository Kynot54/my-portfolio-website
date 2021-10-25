import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./index.css"

export default function MyFooter() {
    return (
        <>
            <footer id="footer">
                <Container>
                    <Row>
                        <Col></Col>
                            <Col>

                            </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                           <a href="https://github.com/Kynot54"><i className="fab fa-github"></i></a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/kyle-whynott/"><i className="fab fa-linkedin"></i></a>
                        </Col>
                        <Col>
                            <a href="https://stackoverflow.com/users/16310474/kynott54"><i className="fab fa-stack-overflow"></i></a>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg="8"><hr id="hr-line" /></Col> {/*Horizontal Line*/}
                    </Row>
                </Container>
            </footer>
        </>       
    );
}