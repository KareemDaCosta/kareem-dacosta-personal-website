import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project, i }) {
	const location = useLocation();
	const { state } = location;

	const ref = useRef(null);

	useEffect(() => {
		if (state && state.index === i) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
		// eslint-disable-next-line
	}, [state]);

	const formatSpecs = (specs) => {
		return specs.map((spec, i) => {
			if (i === specs.length - 1) {
				return (
					<span key={i} className="accent">
						{spec}
					</span>
				);
			} else {
				return (
					<span key={i}>
						<span className="accent">{spec}</span> •{" "}
					</span>
				);
			}
		});
	};

	return (
		<div className="project-card" id={`project-${i}`} ref={ref}>
			<div className="project-name">
				<span>{project.name}</span>
			</div>
			<div className="project-media-container">
				{project.mediaType === "video" ? (
					project.media
				) : (
					<img
						className="project-media"
						src={project.media}
						alt={project.name}
					/>
				)}
			</div>
			<div className="project-date">
				<span>{project.date}</span>
			</div>
			<div className="project-specs">
				<span>{formatSpecs(project.specs)}</span>
			</div>
			<div className="project-description">
				<div className="project-horizontal-line" />
				{project.description}
			</div>
		</div>
	);
}
