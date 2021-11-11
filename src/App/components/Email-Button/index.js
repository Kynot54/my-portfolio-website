import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./index.css"

export default function MyButton() {
    return (
        <>
            <Row id="email-container">
                <Col>
                    <Button id="email" variant="outline-light" href="mailto:&#107;&#121;&#108;&#101;&#046;&#119;&#104;
                    &#121;&#110;&#111;&#116;&#116;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                     size="lg">Email</Button>
                </Col>
            </Row>
        </>
    );
}