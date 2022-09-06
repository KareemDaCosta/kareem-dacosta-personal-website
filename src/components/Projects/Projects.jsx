import "./Projects.css"
import ProjectCard from "./ProjectCard/ProjectCard"

import dungeonDelver from "../../images/projects/dungeon-delver.png"
import studentStore from "../../images/projects/student-store.png"
import flixster from "../../images/projects/flixster.png"
import projectSilo from "../../images/projects/project-silo.png"
import moniac from "../../images/projects/moniac.png"

export default function Projects() {

    const projects = [
        {
            image: dungeonDelver,
            name: "Dungeon Delver",
            date: "June 2022 - August 2022",
            specs: "React Frontend • Node/Express Backend • Parse Database",
            description: <>
            <div>Website to help users find Dungeons and Dragons parties that meet their interests.</div>
            <div>Features custom-built live and paginated chat and notifications systems created with Sockets API; a paginated, ranked, dynamically fetched party query system; background thread prefetching; responsive web design; custom party images; persistent login; recoil state management.</div>
            <div>Make sure to check out the <a href="https://github.com/Dungeon-Delver" target="_blank">Github</a> and <a href="https://dungeon-delver.vercel.app/" target="_blank">Website</a></div></>
        },
        {
            image: studentStore,
            name: "Student Store",
            date: "May 2022 - June 2022",
            specs: "React Frontend • Node/Express Backend",
            description: <>
            <div>Sample student store for a university. My first project built in React!</div>

            <div> Feel free to check out the <a href="https://github.com/KareemDaCosta/Student-Store" target="_blank">Github</a> or <a href="https://student-store-ui.vercel.app/" target="_blank">Website</a>.</div>
            </>
        },
        {
            image: flixster,
            name: "Flixster",
            date: "May 2022",
            specs: "HTML/CSS/JS",
            description: <>
                <div>Movie finding website using TheMovieDB. Has searching, pagination, and an overlay that appears when a movie is pressed. My first independently built website.</div>

                <div>If you're interested, you may check out the <a href="https://github.com/KareemDaCosta/Flixster" target="_blank">Github</a> or <a href="https://kareemdacosta.github.io/Flixster/" target="_blank" >Website</a></div>
            </>
        },
        {
            image: projectSilo,
            name: "Project Silo",
            date: "September 2021",
            specs: "HTML/CSS/JS",
            description: <>
                <div>Hackathon project created for HackMIT. Collaborated with a four-person team to code a website that encourages electronic recycling.</div>
                <div>
                Individually parsed two .csv files using JavaScript to dynamically generate write-ups and charts (using Google Charts API) about the elements in each device. Enabled the scaling of the website to include more devices through the simple modification of one line of code.
                </div>

                <div>Feel free to check out the <a href="https://github.com/Cyno00/Project-Silo" target="_blank">Github</a> or <a href="https://silo.vercel.app/" target="_blank">Website</a>.</div>
            </>
        },
        {
            image: moniac,
            name: "Moniac Model",
            date: "August 2020",
            specs: "Java/AnyLogic",
            description: <>
            <div>Coded a digital version of the <a href="https://cloud.anylogic.com/model/0c280d07-3f21-4e7f-9307-9e0fac39fa14" target="_blank" >MONIAC</a> macroeconomic model.</div>
            </>
        }
    ]
    return (
        <div className="projects">
            {projects.map((item, i)=> {
                return <ProjectCard key={i} project={item} />
            })}
        </div>
    )
}