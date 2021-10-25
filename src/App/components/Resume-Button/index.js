import Button from "react-bootstrap/Button"
import resume from "../../Images/Resume.pdf"
import "./index.css"

export default function MyButton() {
    return (
        <Button id="resume" variant="outline-light" href={resume} size="lg">Resume</Button>
    );
}