import "./Experience.css"
import ExperienceCard from "./ExperienceCard/ExperienceCard"

export default function Experience() {
    const experiences = [
        {
            company: "Meta",
            location: "Menlo Park, CA",
            position: "Meta University Intern (10 week internship)",
            dates: "May 2022 - August 2022",
            description: <>
            Underwent 3 weeks of training in HTML/CSS/JavaScript, React, and Node/Express; created a website in 6 weeks to match users with Dungeons and Dragons parties meeting their interests. <br />
            <span className="underline">Website Features: </span>Custom-built live and paginated chat and notifications systems created with Sockets API; a paginated, ranked, dynamically fetched party query system; background thread prefetching; responsive web design; modifiable party settings including custom images.
            <br />
            •  Built using a React frontend, a Node/Express backend, and a Parse database
            <br />
            •  Check out the <a href="https://github.com/Dungeon-Delver" target="_blank">Github</a> and <a href="https://dungeon-delver.vercel.app/" target="_blank">Website</a>. You can also watch the demo video shown here:
            <iframe width="560" height="315" src="https://www.youtube.com/embed/I1tgPDAW3fs" title="Dungeon Delver Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
            •  Received rating of absolute confidence hire (highest rating); worked with manager on internal SEVs due to completing website ahead of an aggressively planned schedule</>
        },
        {
            company: "We Love Coding",
            location: "New York, NY",
            position: "President",
            dates: "September 2018 - May 2021",
            description: <>Student-created and run volunteer group to teach coding to disadvantaged middle-schoolers.
            •  Ran program, taught coding in-person and online. Over 100 hours volunteered.  <br />
            •  Solo launched and implemented switch to online learning during pandemic  <br />
            •  Expanded program while online; tripled to 16 students, doubled to 13 teachers  <br />
            •  Managed communications with parents and volunteering locations such as community centers and middle schools; organized online classes, and provided weekly updates  <br />
            •  Managed internal organization including recruiting additional teachers, arranging weekly schedules, and dealing with last minute changes; undertook succession planning</>
        }
    ]

    return (
        <div className="experience">
            {experiences.map(item => {
                return <ExperienceCard experience={item} />
            })}
        </div>
    )
}