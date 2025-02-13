import supercold from "../images/projects/supercold.png";
import compendium from "../images/projects/compendium.png";
import ezroute from "../images/projects/ezroute.png";
import MSINT from "../images/projects/MSINT.png";
import dungeonDelver from "../images/projects/dungeon-delver.png";
import studentStore from "../images/projects/student-store.png";
import flixster from "../images/projects/flixster.png";
import projectSilo from "../images/projects/project-silo.png";
import moniac from "../images/projects/moniac.png";

const projects = [
    {
        media: <div className="video-wrap"><div className="video-container"><iframe src="https://www.youtube.com/embed/WEBndFqB_kw?si=fiGxUq2s1Jtk6gSj" title="YouTube video player" frameBorder="0" allow="web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div></div>,
        mediaType: "video",
        thumbnail: supercold,
        name: "Super Cold",
        date: "December 2024",
        specs: ["Processing Java", "Arduino"],
        description: (
            <>
                <div>
                    • Developed a 1v1 laser tag video game using Processing Java with an LilyGo TTGO ESP32 board.
                </div>
                <div>
                    • Game features include <span className="primary">3D graphics using raycasting</span>, randomized map generation using a <span className="primary">modified Prim's Algorithm</span>, 360 degree character sprites computed using vector angles with walking, firing, and dying animations, and much more!
                </div>
                <div>
                    • Device communication performed through a <span className="primary">broadcast wireless connection</span> between any two ESP32 boards.
                </div>
                <div>
                    • The entire development process is detailed in this{" "}
                    <a
                        href="https://medium.com/@kd2688/super-cold-25c6b1b90f1c"
                        target="_blank" rel="noreferrer">
                        blog post
                    </a>.{" "}
                    If you want to see the source code, the{" "}
                    <a
                        href="https://github.com/KareemDaCosta/compendium"
                        target="_blank" rel="noreferrer">
                        Github
                    </a>{" "} is linked.
                </div>
            </>
        ),
    },
    {
        media: <div className="video-wrap"><div className="video-container"><iframe src="https://www.youtube.com/embed/2xCqYuO2Ras?si=h2uRV3Lj3Fys21XD" title="YouTube video player" frameBorder="0" allow="web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div></div>,
        mediaType: "video",
        thumbnail: compendium,
        name: "Compendium",
        date: "April 2024",
        specs: ["Flask", "Jinja"],
        description: (
            <>
                <div>
                    • Developed a website that lets users find and create Dungeons and Dragons creatures.
                </div>
                <div>
                    • Users can create new creatures, edit existing ones, and search for creatures by name, challenge rating, type, and alignment.
                </div>
                <div>
                    • Website state persists between browser sessions using local storage
                </div>
                <div>
                    • Feel free to check out the{" "}
                    <a
                        href="https://github.com/KareemDaCosta/compendium"
                        target="_blank" rel="noreferrer">
                        Github
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://crude-zahara-creature-codex-dc2a72e7.koyeb.app/"
                        target="_blank" rel="noreferrer">
                        Website
                    </a>
                </div>
            </>
        ),
    },
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
                    • Prototyped a mobile app called Ezroute using the <span className="primary">Human-Centered Design process</span>.
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
                    • Feel free to view the{" "}
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
                    • Created a neural network using <span className="primary">only numpy and python</span>{" "}
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
        specs: ["React", "Node/Express", "Parse", "Recoil", "Sockets API"],
        description: (
            <>
                <div>
                    • Website to help users find Dungeons and Dragons
                    parties that meet their interests.
                </div>
                <div>
                    • Features custom-built <span className="primary">live</span> and <span className="primary">paginated chat and
                    notifications systems</span> created with Sockets API | a
                    <span className="primary"> paginated, ranked, dynamically fetched party query
                    system</span> | background thread prefetching | responsive web
                    design | custom party images | persistent login | recoil
                    state management.
                </div>
                <div>
                    • Feel free to check out the{" "}
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
        specs: ["HTML", "CSS", "JavaScript"],
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
        specs: ["HTML", "CSS", "JavaScript"],
        description: (
            <>
                <div>
                    • Hackathon project created for HackMIT. Collaborated
                    with a four-person team to code a website that
                    encourages electronic recycling.
                </div>
                <div>
                    • Individually parsed two .csv files using JavaScript to
                    <span className="primary"> dynamically generate write-ups and charts</span> (using Google
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
        specs: ["Java", "AnyLogic"],
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

const highlightProjects = [
    {
        index: 0,
        data: projects[0],
    },
    {
        index: 1,
        data: projects[1],
    },
    {
        index: 4,
        data: projects[4],
    },
]

export default projects;
export { highlightProjects };