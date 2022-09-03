import "./Experience.css"
import ExperienceCard from "./ExperienceCard/ExperienceCard"

import Meta from "../../images/experience/Meta.png";
import WeLoveCoding from "../../images/experience/WeLoveCoding.png"
import MisrPublicLibrary from "../../images/experience/MisrPublicLibrary.png";


export default function Experience() {
    const experiences = [
        {
            company: "Meta",
            logo: Meta,
            color: "#6eb9ff",
            location: "Menlo Park, CA",
            map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574860.2120714451!2d-121.69581172626474!3d37.25520386483687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbd00e95f08c9%3A0x97cf258e1ae71ca0!2s1%20Hacker%20Way%2C%20Menlo%20Park%2C%20CA%2094025!5e0!3m2!1sen!2sus!4v1662150144325!5m2!1sen!2sus" width="200" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>,
            position: "Meta University Intern",
            dates: <>May 2022 -<br />August 2022</>,
            description: <>
            Underwent 3 weeks of training in HTML/CSS/JavaScript, React, and Node/Express; created a website in 6 weeks to match users with Dungeons and Dragons parties meeting their interests. <br />
            <br />
            <span className="underline">Website Features: </span>Custom-built live and paginated chat and notifications systems created with Sockets API; a paginated, ranked, dynamically fetched party query system; background thread prefetching; responsive web design; modifiable party settings including custom images.
            <br />
            •  Built using a React frontend, a Node/Express backend, and a Parse database
            <br />
            •  Received rating of absolute confidence hire (highest rating); worked with manager on internal SEVs due to completing website ahead of an aggressively planned schedule
            <br />
            •  Check out the <a href="https://github.com/Dungeon-Delver" target="_blank">Github</a> and <a href="https://dungeon-delver.vercel.app/" target="_blank">Website</a>. You can also watch the demo video shown here!
            <br />
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/I1tgPDAW3fs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></>
        },
        {
            company: "We Love Coding",
            logo: WeLoveCoding,
            color: "#77b5a4",
            location: "New York, NY",
            map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858170.131883427!2d-75.38512592065173!3d40.10186695191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1662150859167!5m2!1sen!2sus" width="200" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>,
            position: "President",
            dates: <>September 2018 -<br />May 2021</>,
            description: <>Student-created and run volunteer group to teach coding to disadvantaged middle-schoolers. <br />
            •  Ran program, taught coding in-person and online. Over 100 hours volunteered.  <br />
            •  Solo launched and implemented switch to online learning during pandemic  <br />
            •  Expanded program while online; tripled to 16 students, doubled to 13 teachers  <br />
            •  Managed communications with parents and volunteering locations such as community centers and middle schools; organized online classes, and provided weekly updates  <br />
            •  Managed internal organization including recruiting additional teachers, arranging weekly schedules, and dealing with last minute changes; undertook succession planning</>
        },
        {
            company: "Misr Public Library",
            logo: MisrPublicLibrary,
            color: "#bf7173",
            location: "Giza, Egypt",
            map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245499.2262546495!2d30.99153293268095!3d29.2539937074593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458472a25999f97%3A0x8c0a8a446d887fe1!2sMisr%20Public%20Library!5e0!3m2!1sen!2sus!4v1662151017420!5m2!1sen!2sus" width="200" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>,
            position: "Coding Videos Creator",
            dates: <>June 2020 -<br />August 2020</>,
            description: <>Created introductory coding videos for the Misr Public Library (Egypt Public Library System) geared towards primary-school kids. Watch the first video here!
            <br />
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/M6KEIyWdY9g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>
        }
    ]

    return (
        <div className="experience">
            {experiences.map((item, i)=> {
                return <ExperienceCard key={i} experience={item} />
            })}
        </div>
    )
}