import ezroute from "../images/projects/ezroute.png";
import MSINT from "../images/projects/MSINT.png";
import dungeonDelver from "../images/projects/dungeon-delver.png";
import studentStore from "../images/projects/student-store.png";
import flixster from "../images/projects/flixster.png";
import projectSilo from "../images/projects/project-silo.png";
import moniac from "../images/projects/moniac.png";

const projects = [
    {
        media: <div className="video-wrap"><div className="video-container"><iframe src="https://www.youtube.com/embed/EMfpoICKtKY?si=Lzz5O9_e0J3ZNNlB" title="YouTube video player" frameBorder="0" allow="web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div></div>,
        mediaType: "video",
        thumbnail: ezroute,
        name: "Ezroute",
        date: "April 2024",
        specs: ["Figma"],
        description: (
            <>
                <div>
                    • Prototyped a mobile app called Ezroute using the <span className="accent">Human-Centered Design process</span>.
                </div>
                <div>
                    • Conducted primary and secondary research into territories and problem spaces
                </div>
                <div>
                    • Interviewed potential users to understand their needs and hone in on the core problem
                </div>
                <div>
                    • Prototyped multiple ideas and competitors. Interviewed users to select best idea
                </div>
                <div>
                    • Created an elevator pitch, high fidelity prototype, video, and presentation
                </div>
                <div>
                    Feel free view the{" "}
                    <a
                        href="https://drive.google.com/file/d/1xsLXrtGiYGzQaYU3I610phDs8rT4rvdv/view?usp=sharing"
                        target="_blank" rel="noreferrer">
                        slide deck
                    </a>!
                </div>
            </>
        ),
    },
    {
        media: MSINT,
        mediaType: "image",
        name: "MSINT Neural Network",
        date: "April 2023",
        specs: ["Python", "Numpy"],
        description: (
            <>
                <div>
                    • Created a neural network using <span className="accent">only numpy and python</span>{" "}
                    that achieved over 85% accuracy on the MNIST dataset.
                </div>
                <div>
                    View the{" "}
                    <a
                        href="https://github.com/KareemDaCosta/msint-neural-network"
                        target="_blank" rel="noreferrer">
                        Github
                    </a>{" "}
                    here!
                </div>
            </>
        ),
    },
    {
        media: dungeonDelver,
        mediaType: "image",
        name: "Dungeon Delver",
        date: "June 2022 - August 2022",
        specs: ["React", "Node/Express", "Parse Database", "Recoil", "Sockets API"],
        description: (
            <>
                <div>
                    • Website to help users find Dungeons and Dragons
                    parties that meet their interests.
                </div>
                <div>
                    • Features custom-built <span className="accent">live</span> and <span className="accent">paginated chat and
                    notifications systems</span> created with Sockets API | a
                    <span className="accent"> paginated, ranked, dynamically fetched party query
                    system</span> | background thread prefetching | responsive web
                    design | custom party images | persistent login | recoil
                    state management.
                </div>
                <div>
                    Make sure to check out the{" "}
                    <a
                        href="https://github.com/Dungeon-Delver"
                        target="_blank" rel="noreferrer">
                        Github
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://dungeon-delver.vercel.app/"
                        target="_blank" rel="noreferrer">
                        Website
                    </a>
                </div>
            </>
        ),
    },
    {
        media: studentStore,
        mediaType: "image",
        name: "Student Store",
        date: "May 2022 - June 2022",
        specs: ["React", "Node/Express"],
        description: (
            <>
                <div>
                    Sample student store for a university. My first project
                    built in React!
                </div>

                <div>
                    {" "}
                    Feel free to check out the{" "}
                    <a
                        href="https://github.com/KareemDaCosta/Student-Store"
                        target="_blank" rel="noreferrer">
                        Github
                    </a>{" "}
                    or{" "}
                    <a
                        href="https://student-store-ui.vercel.app/"
                        target="_blank" rel="noreferrer">
                        Website
                    </a>
                    .
                </div>
            </>
        ),
    },
    {
        media: flixster,
        mediaType: "image",
        name: "Flixster",
        date: "May 2022",
        specs: ["HTML/CSS/JS"],
        description: (
            <>
                <div>
                    Movie finding website using TheMovieDB API. Has searching,
                    pagination, and an overlay that appears when a movie is
                    pressed. My first independently built website.
                </div>

                <div>
                    If you're interested, check out the{" "}
                    <a
                        href="https://github.com/KareemDaCosta/Flixster"
                        target="_blank" rel="noreferrer">
                        Github
                    </a>{" "}
                    or{" "}
                    <a
                        href="https://kareemdacosta.github.io/Flixster/"
                        target="_blank" rel="noreferrer">
                        Website
                    </a>
                </div>
            </>
        ),
    },
    {
        media: projectSilo,
        mediaType: "image",
        name: "Project Silo",
        date: "September 2021",
        specs: ["HTML/CSS/JS"],
        description: (
            <>
                <div>
                    • Hackathon project created for HackMIT. Collaborated
                    with a four-person team to code a website that
                    encourages electronic recycling.
                </div>
                <div>
                    • Individually parsed two .csv files using JavaScript to
                    <span className="accent"> dynamically generate write-ups and charts</span> (using Google
                    Charts API) about the elements in each device.
                </div>
                <div>
                    • Enabled the scaling of the website to include more devices
                    through the simple modification of one line of code.
                </div>

                <div>
                    Feel free to check out the{" "}
                    <a
                        href="https://github.com/Cyno00/Project-Silo"
                        target="_blank" rel="noreferrer">
                        Github
                    </a>{" "}
                    or{" "}
                    <a href="https://silo.vercel.app/" target="_blank" rel="noreferrer">
                        Website
                    </a>
                    .
                </div>
            </>
        ),
    },
    {
        media: moniac,
        mediaType: "image",
        name: "Moniac Model",
        date: "August 2020",
        specs: ["Java/AnyLogic"],
        description: (
            <>
                <div>
                    Coded a digital version of the{" "}
                    <a
                        href="https://cloud.anylogic.com/model/0c280d07-3f21-4e7f-9307-9e0fac39fa14"
                        target="_blank" rel="noreferrer">
                        MONIAC
                    </a>{" "}
                    macroeconomic model.
                </div>
            </>
        ),
    },
]

export default projects;