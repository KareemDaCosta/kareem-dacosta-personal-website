import "./Skills.css";

export default function Skills() {
	const languagesKnown = [
		"JavaScript",
		"Python",
		"Java",
		"C",
		"C++",
		"HTML",
		"CSS",
		"PostgreSQL",
	];

	const Libraries = [
		"React.js",
		"Node.js/Express.js",
		"Numpy",
		"Pandas",
		"Matplotlib",
		"Tensorflow",
		"Scrapy",
		"Selenium",
		"Git",
		"Mercurial",
	];

	return (
		<div className="skills">
			<div className="skills-card">
				<div
					className="skills-section  skills-border-vertical"
					id="skills-card-1">
					<div className="skills-heading">Languages Known</div>
					<ul className="skills-list">
						{languagesKnown.map((item) => {
							return (
								<li className="skills-list-item" key={item}>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="skills-border-horizontal" />
				<div className="skills-section" id="skills-card-2">
					<div className="skills-heading">Libraries/Tools Known</div>
					<ul className="skills-list">
						{Libraries.map((item) => {
							return (
								<li className="skills-list-item" key={item}>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
