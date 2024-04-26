import "./HighlightGallery.css";
import experiences from "../../data/experiences.js";
import projects from "../../data/projects.js";

import ExperienceCard from "./HighlightExperienceCard/HighlightExperienceCard.jsx";
import ProjectCard from "./HighlightProjectCard/HighlightProjectCard.jsx";

const GALLERY_SIZE = 3;

export default function HighlightGallery() {
	const highlightProjects = projects.slice(0, GALLERY_SIZE);
	const highlightExperiences = experiences.slice(0, GALLERY_SIZE);

	return (
		<div className="highlight-gallery">
			<div className="highlight-gallery-section">
				<div className="highlight-gallery-heading accent">
					Latest Experiences
				</div>
				<div className="highlight-gallery-experience-contents">
					{highlightExperiences.map((item, i) => {
						return <ExperienceCard key={i} i={i} item={item} />;
					})}
				</div>
			</div>
			<div className="highlight-gallery-section">
				<div className="highlight-gallery-heading accent">
					Top Projects
				</div>
				<div className="highlight-gallery-projects-contents">
					{highlightProjects.map((item, i) => {
						return <ProjectCard key={i} i={i} item={item} />;
					})}
				</div>
			</div>
		</div>
	);
}
