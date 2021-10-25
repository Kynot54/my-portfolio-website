import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./index.css"

export default function MyButton() {
    return (
        <>
            <Row id="email-container">
                <Col>
                    <Button id="email" variant="outline-light" href="mailto:kyle.whynott@gmail.com" size="lg">Email</Button>
                </Col>
            </Row>
        </>
    );
}