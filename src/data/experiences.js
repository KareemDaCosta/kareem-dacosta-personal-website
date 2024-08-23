import Meta from "../images/experience/Meta.png";
import WeLoveCoding from "../images/experience/WeLoveCoding.png";
import MisrPublicLibrary from "../images/experience/MisrPublicLibrary.png";
import Columbia from "../images/experience/Columbia.png";
import SSQRD from "../images/experience/SSQRD.jpg";

const experiences = [
    {
        company: "Meta",
        logo: Meta,
        color: "#6eb9ff",
        location: "New York, NY",
        map: (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858170.131883427!2d-75.38512592065173!3d40.10186695191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1662150859167!5m2!1sen!2sus"
                width="200"
                height="200"
                title="Meta Map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"></iframe>
        ),
        position: "Software Engineering Intern",
        dates: (
            <>
                May 2024 -<br />
                August 2024
            </>
        ),
        description: (
            <>
                • Created a plugin <span className="primary">over 5 weeks ahead of 
                schedule</span> that tracks network requests in a waterfall graph 
                during a live mobile session
                <br />• Added plugin support for <span className="primary">Instagram iOS, 
                Instagram Android, and Threads iOS </span> 
                using Objective-C, Kotlin, and Java
                <br />• Collaborated with <span className="primary">9 engineers 
                across 3 teams</span> to build feature requests 
                and wrote 2 wiki articles (linked <a href="https://docs.google.com/document/d/1iOScJDOX06jvzZOLmgEoch4wC8X1X3rdh91PXt_HUgA/edit?usp=sharing" target="_blank" rel="noreferrer">here</a> and <a href="https://docs.google.com/document/d/1Y5hXFGoKnU_Mu4ywB3lJ2zSkBW_6wBQqQrTVhQ7YOtg/edit?usp=sharing" target="_blank" rel="noreferrer">here</a>) 
                to document my work
                <br />• Conducted 2 presentations, one at my team's All Hands meeting, and won 
                the <span className="primary">iOS Engineer of the Month award</span> for my team
                <br />• Earned a rating of <span className="primary">greatly exceeds expectations
                </span> for my internship (Meta's top rating) and was recognized as the 
                <span className="primary"> engineering highlight of the month by an Instagram director</span>
            </>
        ),
    },
    {
        company: "DESDR Research Lab",
        logo: Columbia,
        color: "#2259aa",
        location: "New York, NY",
        map: (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858170.131883427!2d-75.38512592065173!3d40.10186695191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1662150859167!5m2!1sen!2sus"
                width="200"
                height="200"
                title="Columbia University Map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"></iframe>
        ),
        position: "Student Researcher",
        dates: (
            <>
                January 2024 -<br />
                May 2024
            </>
        ),
        description: (
            <>
                • Worked in <a href="https://columbia-desdr.github.io/" target="_blank" rel="noreferrer">DESDR</a> to 
                bring website support to Nigeria by adjusting charts, area of measurement, and data used
                <br />• Created pipeline scripts to transform data from the type received by a 
                remote server to the type used by the website database
            </>
        ),
    },
    {
        company: "Meta",
        logo: Meta,
        color: "#6eb9ff",
        location: "New York, NY",
        map: (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858170.131883427!2d-75.38512592065173!3d40.10186695191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1662150859167!5m2!1sen!2sus"
                width="200"
                height="200"
                title="Meta Map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"></iframe>
        ),
        position: "Software Engineering Intern",
        dates: (
            <>
                May 2023 -<br />
                August 2023
            </>
        ),
        description: (
            <>
                • Designed and implemented a restructuring of Instagram Web
                Settings that <span className="primary">improved performance </span>and <span className="primary">increased flexibility </span> 
                of underlying architecture <span className="primary">three weeks ahead of schedule </span>
                using React, Relay, and GraphQL.
                <br />• Redesigned core Instagram components and ensured
                a11y compatibility
                <br />• Provided weekly updates and <span className="primary">led implementation
                strategy meetings </span>with team members to ensure code quality.
                <br />• Developed pages for managing tagged posts in an
                individually scoped-out project and boosted performance
                using React, Relay, GraphQL, and Django.
            </>
        ),
    },
    {
        company: "SSQRD",
        logo: SSQRD,
        color: "#fce4ed",
        location: "New York, NY",
        map: (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858170.131883427!2d-75.38512592065173!3d40.10186695191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1662150859167!5m2!1sen!2sus"
                width="200"
                height="200"
                title="SSQRD Map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"></iframe>
        ),
        position: "Lead Software Engineer",
        dates: (
            <>
                September 2022 -<br />
                May 2023
            </>
        ),
        description: (
            <>
                • Designed and developed a Python-based Scrapy web scraper,
                which resulted in a <span className="primary">3800% speed improvement </span>and <span className="primary">enhanced
                system reliability</span>.
                <br />
                • Successfully built a full-stack website utilizing
                technologies such as React.js, Node.js, Express.js, and
                PostgreSQL.
                <br />
                • Participated in weekly Agile stand-up meetings to align on
                progress and strategize for the subsequent week's tasks.
                <br />• <span className="primary">Conducted 1:1 mentoring sessions </span>to explain React
                concepts, pair-program, and recommended sources for further
                learning.
                <br />• Delivered a presentation to a group of 30 computer
                science students detailing project outcomes and authored a
                comprehensive report documenting accomplishments
            </>
        ),
    },
    {
        company: "Columbia University",
        logo: Columbia,
        color: "#2259aa",
        location: "New York, NY",
        map: (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858170.131883427!2d-75.38512592065173!3d40.10186695191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1662150859167!5m2!1sen!2sus"
                width="200"
                height="200"
                title="Columbia University Map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"></iframe>
        ),
        position: "Resident Advisor",
        dates: (
            <>
                August 2022 -<br />
                May 2023
            </>
        ),
        description: (
            <>
                • Dedicate 20 hours a week to connect with residents, create
                floor programming, provide guidance, mentorship, and support
                <br />• Supervise 42 residents from multiple special
                interest groups
            </>
        ),
    },
    {
        company: "Meta",
        logo: Meta,
        color: "#6eb9ff",
        location: "Menlo Park, CA",
        map: (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574860.2120714451!2d-121.69581172626474!3d37.25520386483687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbd00e95f08c9%3A0x97cf258e1ae71ca0!2s1%20Hacker%20Way%2C%20Menlo%20Park%2C%20CA%2094025!5e0!3m2!1sen!2sus!4v1662150144325!5m2!1sen!2sus"
                width="200"
                height="200"
                title="Meta Map CA"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"></iframe>
        ),
        position: "Meta University Software Engineering Intern",
        dates: (
            <>
                May 2022 -<br />
                August 2022
            </>
        ),
        description: (
            <>
                • Learned HTML/CSS/JavaScript, React, and Node/Express in 3
                weeks by cloning popular websites such as Netflix and
                Twitter <br />• Created a{" "}
                <a
                    href="https://dungeon-delver.vercel.app/"
                    target="_blank" rel="noreferrer">
                    website
                </a>{" "}
                in 6 weeks using a React frontend, a Node/Express backend,
                and a Parse database to match users with Dungeons and
                Dragons parties meeting their interests. Code available on{" "}
                <a href="https://github.com/Dungeon-Delver" target="_blank" rel="noreferrer">
                    Github
                </a>.{" "}
                <br />
                • Implemented custom-built <span className="primary">live</span> and <span className="primary">paginated chat and
                    notifications systems</span> created with Sockets API | a
                    <span className="primary"> paginated, ranked, dynamically fetched party query
                    system</span> | background thread prefetching | responsive web
                    design | custom party images | persistent login | recoil
                    state management.
                <br />
                • Earned rating of absolute confidence hire along with
                return offer as recognition for work that greatly exceeded
                expectations. <br />
                • Worked with manager on internal SEVs due to <span className="primary">completing
                website ahead of an aggressively planned schedule</span>.
                <br />
            </>
        ),
    },
    {
        company: "We Love Coding",
        logo: WeLoveCoding,
        color: "#77b5a4",
        location: "New York, NY",
        map: (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858170.131883427!2d-75.38512592065173!3d40.10186695191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1662150859167!5m2!1sen!2sus"
                width="200"
                height="200"
                style={{ border: 0 }}
                title="We Love Coding Map"
                allowFullScreen=""
                loading="lazy"></iframe>
        ),
        position: "President",
        dates: (
            <>
                September 2018 -<br />
                May 2021
            </>
        ),
        description: (
            <>
                • Led student-founded volunteer group committed to teaching
                coding to underserved middle school students, contributing
                over 100 volunteer hours. <br />
                • Solely initiated and managed a transition to online
                learning during the pandemic, resulting in a <span className="primary">tripling of
                students </span>and <span className="primary">doubling of teachers</span>. <br />
                • Managed communications with parents and volunteering
                locations such as community centers and middle schools,
                organized online classes, and provided weekly updates. <br />
                • Managed internal organization including recruiting
                teachers, arranging weekly schedules, and undertook
                succession planning.
            </>
        ),
    },
    {
        company: "Misr Public Library",
        logo: MisrPublicLibrary,
        color: "#bf7173",
        location: "Giza, Egypt",
        map: (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245499.2262546495!2d30.99153293268095!3d29.2539937074593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458472a25999f97%3A0x8c0a8a446d887fe1!2sMisr%20Public%20Library!5e0!3m2!1sen!2sus!4v1662151017420!5m2!1sen!2sus"
                width="200"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                title="Misr Public Library Map"
                loading="lazy"></iframe>
        ),
        position: "Coding Videos Creator",
        dates: (
            <>
                June 2020 -<br />
                August 2020
            </>
        ),
        description: (
            <>
                Created introductory coding videos for the Misr Public
                Library (Egypt Public Library System) geared towards
                primary-school kids. Watch the first video here!
                <br />
                <br />
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ZQZVrYzWWGI"
                    title="Cat and Balloon Scratch Video 1"
                    frameBorder="0"
                    allow="web-share"
                    allowFullScreen></iframe>
            </>
        ),
    },
];

const highlightExperiences = experiences.slice(0, 3);

export default experiences;
export {highlightExperiences};