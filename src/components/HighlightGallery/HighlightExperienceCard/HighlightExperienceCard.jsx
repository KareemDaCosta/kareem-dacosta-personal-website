import "./HighlightExperienceCard.css";
import { Link } from "react-router-dom";

export default function ExperienceCard({ i, item }) {
	const renderImage = () => {
		return (
			<div className="highlight-experience-logo">
				<img src={item.logo} alt={item.company} />
			</div>
		);
	};

	const renderText = () => {
		return (
			<div className="highlight-experience-text">
				<div className="highlight-experience-title">{item.company}</div>
				<div className="highlight-experience-position">
					{item.position}
				</div>
			</div>
		);
	};
	return (
		<Link to={`/experience`} state={{ index: i }}>
			<div className="highlight-experience-card highlight-card accent">
				{renderImage()}
				{renderText()}
			</div>
		</Link>
	);
}
