import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./index.css"

export default function MyButton() {
    return (
        <>
            <Row>
                <Col>
                    <Button className="see-more-button" variant="outline-primary" href={''} size="lg">See More</Button>
                </Col>
            </Row>
        </>
    );
}