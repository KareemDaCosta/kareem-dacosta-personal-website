import "./ProjectCard.css"

export default function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-name">
                <span>{project.name}</span>
            </div>
            <div className="project-image-container">
                <img className="project-image" src={project.image} alt={project.name}/>
            </div>
            <div className="project-date">
                <span>{project.date}</span>
            </div>
            <div className="project-specs">
                <span>{project.specs}</span>
            </div>
            <div className="project-description">
                <div className="horizontal-line" />
                {project.description}
            </div>
        </div>
    )
}