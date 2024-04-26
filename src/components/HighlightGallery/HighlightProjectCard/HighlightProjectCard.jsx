import "./HighlightProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ i, item }) {
	const renderImage = () => {
		if (item.hasOwnProperty("thumbnail")) {
			return (
				<div className="highlight-project-image">
					<img src={item.thumbnail} alt={item.name} />
				</div>
			);
		}
		return (
			<div className="highlight-project-image">
				<img src={item.media} alt={item.name} />
			</div>
		);
	};

	const renderText = () => {
		return (
			<div className="highlight-project-text">
				<div className="highlight-project-title primary">
					{item.name}
				</div>
				<div className="highlight-project-description">
					{item.specs.slice(0, 3).map((spec, i) => {
						if (i === item.specs.length - 1 || i === 2) {
							return <span key={i}>{spec}</span>;
						} else {
							return (
								<span key={i}>
									<span>{spec}</span> •{" "}
								</span>
							);
						}
					})}
				</div>
			</div>
		);
	};
	return (
		<Link to={`/projects`} state={{ index: i }}>
			<div className="highlight-project-card highlight-card">
				{renderImage()}
				{renderText()}
			</div>
		</Link>
	);
}
