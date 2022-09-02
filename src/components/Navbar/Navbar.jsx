import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar">
            <Link to={'/'}><h1>Kareem DaCosta</h1></Link>
				<div className="navbar-button-container">
					<Link to={`/experience`} className="experience-button navbar-button">EXPERIENCE</Link>
					<Link to={`/projects`} className="projects-button navbar-button">PROJECTS</Link>
					<Link to={`/education`} className="education-button navbar-button">EDUCATION</Link>
                    <Link to={`/skills`} className="skills-button navbar-button">SKILLS</Link>
				</div>
        </div>
    )
}