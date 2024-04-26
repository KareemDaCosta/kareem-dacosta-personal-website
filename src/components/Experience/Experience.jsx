import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import experiences from "../../data/experiences";

export default function Experience() {
	return (
		<div className="experience">
			{experiences.map((item, i) => {
				return <ExperienceCard key={i} i={i} experience={item} />;
			})}
		</div>
	);
}
