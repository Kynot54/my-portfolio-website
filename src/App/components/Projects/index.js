import Container from "react-bootstrap/Container";
import Project from "./project.js"

import {projects} from "../../data.js"

import "./index.css"

export default function ProjectList(props) {
    const {title} = props
    const projectsComponent = projects.map((user, i) => {
        return <Project title={projects[i].title} paragraph={projects[i].paragraph} seeMore={projects[i].seeMore} sourceCode={projects[i].sourceCode} image={projects[i].image}/>
    })
    return(
        <section id="project" className="viewport">
            <Container>
                <br />
                <h2 id="projects-title">{title}</h2>
                    {projectsComponent}     
            </Container>
        </section>
        );
}