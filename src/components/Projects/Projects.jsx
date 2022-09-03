import "./Projects.css"
import ProjectCard from "./ProjectCard/ProjectCard"

import dungeonDelver from "../../images/projects/dungeon-delver.png"
import studentStore from "../../images/projects/student-store.png"
import flixster from "../../images/projects/flixter.png"
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
            <h2>Premise</h2>
            <div>I really enjoy playing the game Dungeons and Dragons, but one of the main blocks to playing the game is finding other people to play it with since it takes at least 4 people (ideally 5-6). Thats how I got the idea for Dungeon Delver, a website with the goal of bridging that gap and allowing people to focus on what really matters: playing the game! I created the project from scratch over the course of 6 weeks</div>
            <h2>Links</h2>
            <div>Make sure to check out the <a href="https://github.com/Dungeon-Delver" target="_blank">Github</a> and <a href="https://dungeon-delver.vercel.app/" target="_blank">Website</a></div>
            <h2>Features</h2>
            <div>Dungeon Delver allows for account creation using Facebook OAuth. The website features persistent sign-on using local storage. Once logged in, users can find parties or create a new one meeting their own specifications. The finding parties algorithm uses a party-ranking method to ensure that users see the parties that meet their specifications. Party searching has pagination and background thread prefetching to reduce wait times for the user. Alternatively, if users already know of a party, they can search for parties by party name. Once a party is found, users can request to join parties. Parties are fully customizable by the party's dungeon master, including Search Parameters that will change the search criteria for the party, status (private/public/closed), custom images, and custom party names. </div>
            
            <div>As the DM, you have full control over your party. Acting essentially as an admin as well as the dungeon master, You can accept/reject users, remove troublesome users, modify party search parameters, upload custom images, or if you have no other choice, delete the party.</div>
            
            <div>All members of a party have access to party chat. Party chat (implemented with Sockets API) theoretically supports an unlimited number of people, but parties are limited to 6 users. Party chat also supports pagination, so users can load more messages on demand and see chat history. Each user has a profile that can be accessed in a variety of ways (clicking on their chat message, clicking on their name in a members list for a party, etc.) Each profile lists the user's public parties. Users of a party can leave at any time; however, the DM cannot leave, only delete the party.</div>
            
            <div>The website also has a live notification system. Notifications are triggered by the following events: party join request, accept party join request, reject party join request, party leave and party deletion. Notifications are fully live and paginated.</div>
            
            <h2>Specifications</h2>
            <div>The frontend was built in React and the backend has a Node/Express server and a Sockets API server for live notifications and chat. The backend connects to a database that uses Parse.</div>
            
            <h2>Demo</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/I1tgPDAW3fs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></>
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
                <div>Movie finding website using TheMovieDB. Has searching, pagination, and an overlay that appears when a movei is pressed. My first independently built website.</div>

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
                •  Used JavaScript to parse two .CSV files, one containing the percent composition of the elements in sample devices and the other containing a description of the elements<br />
                •  Used the Google Charts API to present the elemental compositions and embed hyperlinks into the pie chart that go to the element's section on the page<br />
                •  Used JavaScript to dynamically create write ups for the different elements depending on what was present in the device in a way that is easily scalable: more sample devices can be added through the simple modification of one line of code<br />
                </div>

                <div>Feel free to check out the <a href="https://github.com/Cyno00/Project-Silo" target="_blank">Github</a> or <a href="https://silo.vercel.app/" target="_blank">Website</a>.</div>
            </>
        },
        {
            image: moniac,
            name: "Moniac Anylogic Model",
            date: "August 2020",
            specs: "Java/AnyLogic",
            description: <>
            <div>Coded a digital version of the <a href="https://cloud.anylogic.com/model/0c280d07-3f21-4e7f-9307-9e0fac39fa14">MONIAC macroeconomic model</a>.</div>
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