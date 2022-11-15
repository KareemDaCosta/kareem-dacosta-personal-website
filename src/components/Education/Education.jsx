import "./Education.css";
import columbiaLogo from "../../images/education/Columbia_Engineering_logo.png";
import cgpsLogo from "../../images/education/CGPS.png";

const columbiaRelevantCourses = [
	{
		title: "Advanced Programming",
		grade: "A+",
		language: "C",
		date: "Spring 2022",
	},
	{
		title: "Discrete Mathematics",
		grade: "A+",
		date: "Spring 2022",
	},
	{
		title: "Multivariable Calculus for Engineers and Applied Scientists",
		grade: "A",
		date: "Fall 2021",
	},
	{
		title: "Data Structures in Java",
		grade: "A",
		language: "Java",
		date: "Spring 2020 (Dual Degree with High School)",
	},
	{
		title: "Essential Data Structures",
		grade: "A",
		language: "C, C++",
		date: "Fall 2019 (Dual Degree with High School)",
	},
	{
		title: "Intro to Computing for Engineers and Applied Scientists",
		grade: "A",
		language: "Python",
		date: "Summer 2019 (Dual Degree with High School)",
	},
];

export default function Education() {
	return (
		<div className="education">
			<div className="education-card">
				<div className="education-logo-wrapper">
					<img
						className="education-logo"
						src={columbiaLogo}
						alt="Columbia School of Engineering and Applied Science"
					/>
				</div>
				<div className="education-name">
					Columbia University School of Engineering and Applied
					Sciences
				</div>
				<div className="education-degree">
					Expected Degree:{" "}
					<span>Bachelors of Science (Class of 2025)</span>
				</div>
				<div className="education-gpa">
					GPA: <span>4.16</span>
				</div>
				<div className="education-list-wrapper">
					<div className="education-coursework-header education-header">
						Relevant Coursework
					</div>
					<ul className="education-coursework education-list">
						{columbiaRelevantCourses.map((course, i) => {
							return (
								<div
									className="education-course-wrapper"
									key={i}>
									<div className="education-horizontal-line" />
									<li className="education-course education-li">
										<div className="education-course-title">
											{course.title}
										</div>
										<div className="education-course-date">
											Semester: {course.date}
										</div>
										<div className="education-course-grade">
											Grade Received: {course.grade}
										</div>
										{course.hasOwnProperty("language") ? (
											<div className="education-course-language">
												Languages used:{" "}
												{course.language}
											</div>
										) : (
											""
										)}
									</li>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="education-card">
				<div className="education-logo-wrapper">
					<img
						className="education-logo"
						src={cgpsLogo}
						alt="Columbia Grammar and Preparatory School?\"
					/>
				</div>
				<div className="education-name">
					Columbia Grammar and Preparatory School
				</div>
				<div className="education-degree">
					Degree Received: <span>High School Diploma</span>
				</div>
				<div className="education-gpa">
					GPA: <span>3.98</span> (unweighted) <br /> ACT:{" "}
					<span>36/36</span>
				</div>
				<div className="education-list-wrapper">
					<div className="education-awards-header education-header">
						Awards Received
					</div>
					<ul className="education-awards education-list">
						<div className="education-horizontal-line" />
						<li className="education-award education-li">
							James W. Stern Award (third in class ranking)
						</li>
						<li className="education-award education-li">
							National Merit Scholarship
						</li>
						<li className="education-award education-li">
							Computer Science Award
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
