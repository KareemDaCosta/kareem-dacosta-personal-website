import "./Footer.css"
import github from "../../images/socials/github.png"
import linkedin from "../../images/socials/linkedin.png"
import gmail from "../../images/socials/gmail.png"
import resume from "../../documents/Kareem DaCosta Resume.pdf"
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-sub-container">
                <h1 className="footer-name">Kareem DaCosta</h1>
                <div className="hr"/>
                <div className="footer-text">Interested? Feel free to reach out to me!</div>
                <div className="footer-button-container">
                    <div className="footer-button"><a href="https://github.com/KareemDaCosta" className="footer-button" target="_blank">
                        <img src={github} alt="github" />
                    </a></div>
                    <div className="footer-button"><a href="https://www.linkedin.com/in/kareemdacosta" className="footer-button" target="_blank">
                        <img src={linkedin} alt="linked in" />
                    </a></div>
                    <div className="footer-button"><a href="mailto:kareem.dacosta@columbia.edu" className="footer-button" target="_blank">
                        <img src={gmail} alt="email" />
                    </a></div>
                    <a href={resume} target="_blank" className="resume-link">
                        <div className="download-resume-button">
                            <span className="download-arrow">🗏</span> <span className="download-resume-text">Resume</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

