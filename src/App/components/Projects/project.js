import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import {button} from "../../data.js";

const MyProject = (props) => {
    const {title, paragraph, seeMore, sourceCode, image} = props
        return (
        <>
            <Row>
                <Col sm={6} xs={12}>
                        <h3>{title}</h3>
                        <br />
                        <p><span className="tab"></span> {paragraph} </p>
                        <br />
                        <Row>
                            <br />
                            <Col>
                            <Button id={`${button[2].id}`} variant={`${button[2].variantType}`} href={`${seeMore}`} size={`${button[2].size}`}> {`${button[2].name}`} </Button>
                            </Col>
                            <Col>
                            <Button id={`${button[3].id}`} variant={`${button[3].variantType}`} href={`${sourceCode}`} size={`${button[3].size}`}> {`${button[3].name}`} </Button>
                            </Col>
                        </Row>
                </Col>
        
                <Col sm={6} xs={12}>
                    <Image alt="" src={image} thumbnail fluid></Image>
                </Col>
            </Row>
            <br />
            </>
        )
}

export default MyProject;