import "./ProjectCard.css";

export default function ProjectCard({ project }) {
	const formatSpecs = (specs) => {
		return specs.map((spec, i) => {
			if (i === specs.length - 1) {
				return (
					<span key={i} className="primary">
						{spec}
					</span>
				);
			} else {
				return (
					<span key={i}>
						<span className="primary">{spec}</span> •{" "}
					</span>
				);
			}
		});
	};

	return (
		<div className="project-card">
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
