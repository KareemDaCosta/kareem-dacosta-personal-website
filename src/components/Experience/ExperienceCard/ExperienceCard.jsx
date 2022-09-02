import "./ExperienceCard.css"

export default function ExperienceCard({experience}) {
    return <div className="experience-card">
        <div className="experience-logo-container">
            <img className="experience-logo" src={experience.logo} alt={experience.company}/>
        </div>
        <div className="experience-company">
            {experience.company}
        </div>
        <div className="experience-location">
            {experience.location}
        </div>
        <div className="experience-position">
            {experience.position}
        </div>
        <div className="experience-dates">
            {experience.dates}
        </div>
        <div className="experience-description">
            {experience.description}
        </div>
    </div>
}