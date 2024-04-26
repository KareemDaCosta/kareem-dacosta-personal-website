import "./HighlightGallery.css";
import { highlightExperiences } from "../../data/experiences.js";
import { highlightProjects } from "../../data/projects.js";

import ExperienceCard from "./HighlightExperienceCard/HighlightExperienceCard.jsx";
import ProjectCard from "./HighlightProjectCard/HighlightProjectCard.jsx";

export default function HighlightGallery() {
	return (
		<div className="highlight-gallery">
			<div className="highlight-gallery-section">
				<div className="highlight-gallery-heading primary">
					Latest Experiences
				</div>
				<div className="highlight-gallery-experience-contents">
					{highlightExperiences.map((item, i) => {
						return <ExperienceCard key={i} i={i} item={item} />;
					})}
				</div>
			</div>
			<div className="highlight-gallery-section">
				<div className="highlight-gallery-heading primary">
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
