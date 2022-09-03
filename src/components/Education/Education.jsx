import "./Education.css"
import columbiaLogo from "../../images/education/Columbia_Engineering_logo.png"
import cgpsLogo from "../../images/education/CGPS.png"

const columbiaRelevantCourses = [
    {
        title: "Intro to Computing for Engineers and Applied Scientists",
        grade: "A",
        language: "Python",
        date: "Summer 2019 (Dual Degree with High School)"
    },
    {
        title: "Essential Data Structures",
        grade: "A",
        language: "C, C++",
        date: "Fall 2019 (Dual Degree with High School)"
    },
    {
        title: "Data Structures in Java",
        grade: "A",
        language: "Java",
        date: "Spring 2020 (Dual Degree with High School)"
    },
    {
        title: "Multivariable Calculus for Engineers and Applied Scientists",
        grade: "A",
        date: "Fall 2021"
    },
    {
        title: "Advanced Programming",
        grade: "A+",
        language: "",
        date: "Spring 2022"
    },
    {
        title: "Discrete Mathematics",
        grade: "A+",
        date: "Spring 2022"
    }
]

export default function Education() {
    return (
        <div className="education">
            <div className="education-card">
                <div className="education-logo-wrapper">
                    <img className="education-logo" src={columbiaLogo} alt="Columbia School of Engineering and Applied Science"/>
                </div>
                <div className="education-name">
                    Columbia University School of Engineering and Applied Sciences
                </div>
                <div className="gpa">
                    GPA: 4.1602
                </div>
                <div className="education-coursework-wrapper">
                    <div className="education-coursework-header">
                        Relevant Coursework:
                    </div>
                    <ul className="education-coursework">
                        {columbiaRelevantCourses.map((course, i) => {
                            return (
                                <li className="education-course" key={i}>
                                    <div className="education-course-title">
                                        {course.title}
                                    </div>
                                    <div className="education-course-date">
                                        Semester: {course.date}
                                    </div>
                                    <div className="education-course-grade">
                                        Grade Received: {course.grade}
                                    </div>
                                    {course.hasOwnProperty("language") ? 
                                    <div className="education-course-language">
                                        Languages used: {course.language}
                                    </div> : 
                                    ""}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="education-card">
                <div className="education-logo-wrapper">
                    <img className="education-logo" src={cgpsLogo} alt="Columbia School of Engineering and Applied Science"/>
                </div>
            </div>
        </div>
    )
}