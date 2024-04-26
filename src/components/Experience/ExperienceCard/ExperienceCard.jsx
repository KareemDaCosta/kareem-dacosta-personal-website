import { useLocation } from "react-router-dom";
import "./ExperienceCard.css";
import { useEffect, useRef } from "react";

export default function ExperienceCard({ experience, i }) {
	const location = useLocation();
	const { state } = location;

	const ref = useRef(null);

	useEffect(() => {
		if (state && state.index === i) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
		// eslint-disable-next-line
	}, [state]);

	return (
		<div
			id={`experience-${i}`}
			className="experience-card"
			style={{
				backgroundImage: `linear-gradient(to top,#faf9f6, #faf9f6)`,
			}}
			ref={ref}>
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
			<div className="experience-description">
				{experience.description}
			</div>
		</div>
	);
}
