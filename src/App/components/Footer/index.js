import React, {useState} from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./index.css"


export default function MyFooter() {
    // const [theme, setTheme] = useState('light')
    // const toggleTheme = () => {
    //     if (theme === "light"){
    //         setTheme("dark")
    //     } else {
    //         setTheme("light")
    //     }
    // }
    return (
        <>
            <footer id={`${theme}_footer`}>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <a href="https://github.com/Kynot54" target="_blank" rel="noreferrer"> <FaGithub id="githubIcon" /> </a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/kyle-whynott/" target="_blank" rel="noreferrer"> <FaLinkedin id="linkedinIcon" /> </a>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg="8"><hr id={`${theme}_hr-line`} /></Col> {/*Horizontal Line*/}
                    </Row>
                    {/* <Row>
                        <Col></Col>
                        <Col lg="2">
                            <Button id="toggle" variant={`outline-${theme}`} onClick={toggleTheme}>Toggle Theme</Button>
                        </Col>
                        <Col></Col>
                    </Row> */}
                </Container>
            </footer>
        </>       
    );
}