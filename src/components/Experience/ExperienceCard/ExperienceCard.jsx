import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {
  return (
    <div
      className="experience-card"
      style={{ backgroundImage: `linear-gradient(to top,#faf9f6, #faf9f6)` }}
    >
      <div className="experience-logo-container">
        <img
          className="experience-logo"
          src={experience.logo}
          alt={experience.company}
        />
      </div>
      <div className="experience-company">
        <span>{experience.company}</span>
      </div>
      <div className="experience-position">
        <span>{experience.position}</span>
      </div>
      <div className="experience-dates">
        <span>{experience.dates}</span>
      </div>
      <div className="experience-location">
        <span>{experience.location}</span>
      </div>
      <div className="experience-map">{experience.map}</div>
      <div className="experience-description">{experience.description}</div>
    </div>
  );
}
