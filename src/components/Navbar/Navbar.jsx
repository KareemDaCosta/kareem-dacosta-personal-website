import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar">
            <Link to={'/'}><h1>Kareem DaCosta</h1></Link>
				<div class="navbar-button-container">
					<Link to={`/experience`} class="experience-button navbar-button">EXPERIENCE</Link>
					<Link to={`/projects`} class="projects-button navbar-button">PROJECTS</Link>
					<Link to={`/education`} class="education-button navbar-button">EDUCATION</Link>
                    <Link to={`/skills`} class="skills-button navbar-button">SKILLS</Link>
				</div>
        </div>
    )
}