import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
	return (
		<div className="projects">
			{projects.map((item, i) => {
				return <ProjectCard key={i} project={item} />;
			})}
		</div>
	);
}
