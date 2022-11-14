import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import {button} from "../../data.js" 

import "./index.css"

const MyAbout = (props) => {
    const {title, image, intro, paragraph} = props
    return(
        <>
        <section id="about" className="viewport">
            <Container fluid>
                <br />
                <h2 className="about-text about-title">{title}</h2> 
                <Row>
                    <Col sm={6} xs={12}>
                        <Image id="pro-pic" alt="" src={image} rounded fluid></Image>
                    </Col>

                    <Col sm={6} xs={12}>
                        <p className="about-text about-paragraph">
                            {intro}
                        <br /> 
                        <br />
                            {paragraph}
                        </p>
                        <br />
                        <Button id={`${button[1].id}`} variant={`${button[1].variantType}`} href={`${button[1].hLink}`} size={`${button[1].size}`}> {`${button[1].name}`} </Button>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
        );
}

export default MyAbout;