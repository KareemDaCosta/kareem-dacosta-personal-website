import "./Skills.css";

export default function Skills() {
  const languagesKnown = [
    "Java",
    "Python",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js/Express.js",
    "Parse",
  ];

  const editorsKnown = [
    "Visual Studio Code",
    "Vim",
    "Unix",
    "Spyder",
    "Jupyter Notebook",
    "Eclipse"
  ];

  return (
    <div className="skills">
      <div className="skills-card">
        <div
          className="skills-section  skills-border-vertical"
          id="skills-card-1"
        >
          <div className="skills-heading">Languages/Libraries Known</div>
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
          <div className="skills-heading">Environments Used</div>
          <ul className="skills-list">
            {editorsKnown.map((item) => {
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
