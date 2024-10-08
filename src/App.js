import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Footer from "./components/Footer";
import Down from "./components/Down";
import axios from 'axios';

// const myData={
//     "name": "Swet Shreet",
//     "intro": ["Hello! I am Swet.", "A competitive programmer and aspiring software developer."],
//     "about": [
//         "I'm Swet Shreet, a Computer Science graduate from the National Institute of Technology, Hamirpur. My strong passion for coding drives my commitment to software engineering. With a background in web and game development, I've honed my skills through practical experience as a Software Engineer Intern at Amazon, UK. I'm eager to tackle challenging projects and continue learning to contribute effectively in the dynamic tech landscape.",
//         "In competitive programming, I've achieved the status of an Expert on Codeforces and maintain a 6-star coder rank on CodeChef. This accomplishment, alongside my proficiency in languages such as C++, Java, and JavaScript, reflects my dedication to mastering various aspects of software development."
//     ],
//     "contacts": {
//         "phone": { "name": "Moblie", "data": "+91-7992307048" },
//         "email": { "name": "E-Mail", "data": "shreet.swet@gmail.com" },
//         "github": { "name": "Github", "data": "https://github.com/swet-s" },
//         "codeforces": {
//             "name": "Codeforces",
//             "data": "https://codeforces.com/profile/_swet"
//         },
//         "codechef": {
//             "name": "CodeChef",
//             "data": "https://www.codechef.com/users/sswet"
//         },
//         "linkedin": {
//             "name": "LinkedIn",
//             "data": "https://www.linkedin.com/in/swetshreet"
//         },
//         "twitter": {
//             "name": "Twitter",
//             "data": "https://twitter.com/ShreetSwet"
//         }
//     },
//     "resume" : {
//         "drive": "https://bit.ly/3sz81yO",
//         "pdf": "https://latext.onrender.com/resumepdf",
//         "download": "https://latext.onrender.com/resumepdf?download=true&filename=CV_SwetShreet",
//         "latex": "https://latext.onrender.com/resume"
//     },
//     "infoList": [
//         { "name": "Name", "data": "Swet Shreet" },
//         { "name": "Phone No", "data": "+91-7992307048" },
//         { "name": "Email Id", "data": "shreet.swet@gmail.com" },
//         { "name": "Address", "data": "Guru Nagar Gangta, Godda, Jharkhand, India, 814133" },
//         { "name": "Resume", "data": "https://bit.ly/3sz81yO" },
//         { "name": "LinkedIn", "data": "https://www.linkedin.com/in/swetshreet" },
//         { "name": "Github", "data": "https://github.com/swet-s" },
//         { "name": "Codeforces", "data": "https://codeforces.com/profile/_swet" },
//         { "name": "CodeChef", "data": "https://www.codechef.com/users/sswet" },
//         { "name": "Website", "data": "https://swet-portfolio.web.app/" }
//     ],
//     "projects": [
//         {
//             "name": "Intractle",
//             "description": "Intractle is a full-stack MERN (MongoDB, Express, React, Node.js) project that offers an engaging word game experience, reminiscent of Wordle. The application features a structured backend implemented in Express, utilizing MongoDB for data management. The frontend, developed with React and Redux, incorporates Tailwind CSS for a polished and responsive user interface.",
//             "duration": "Apr 2023 - Dec 2023",
//             "techStack": ["NodeJs", "React", "Redux", "Tailwind", "Express", "MongoDB"],
//             "link": "https://github.com/swet-s/Intractle",
//             "demo": "https://intractle.web.app"
//         },
//         {
//             "name": "Daylight",
//             "description": "Daylight is an exciting project that delves into the world of Raytracing and Basic Rendering. It aims to provide a playground for learning and experimenting with cutting-edge graphics techniques and other fascinating elements.",
//             "duration": "Aug 2022 - Present",
//             "techStack": ["C++", "Vulkan"],
//             "link": "https://github.com/swet-s/Daylight"
//         },
//         {
//             "name": "Dark",
//             "description": "Dark is an interactive Android game developed using Unity and C#. This engaging project showcases proficiency in game development, featuring compelling levels with interactive UI elements for an immersive and entertaining experience. The endeavor underscores the ability to craft engaging experiences using contemporary game development technologies.",
//             "duration": "Jul 2020 - Dec 2020",
//             "techStack": ["Unity", "C#"],
//             "link": "https://github.com/swet-s/Dark"
//         },
//         {
//             "name": "GameHub",
//             "description": "GameHub, is a versatile gaming platform featuring a 15-Puzzle game and a Coin Toss simulation. The 15-Puzzle is an engaging sliding puzzle with numbered tiles, challenging players to rearrange them from disorder to a specified order by sliding tiles into an empty space. On the other hand, the Coin Toss game provides a playful and interactive way to make decisions through a virtual coin flip. GameHub is meticulously crafted using React.",
//             "duration": "Nov 2023 - Present",
//             "techStack": ["React", "Html", "CSS"],
//             "link": "https://github.com/swet-s/GameHub",
//             "demo": "https://game-hub-01.web.app"
//         }
//     ],
//     "workExp": [
//         {
//             "company": "Swiggy",
//             "position": "Associate Software Development Engineer",
//             "duration": "Jan 2024 - Present",
//             "location": "Bangalore, India, Remote",
//             "description": "Worked on multiple projects with Swiggy’s Foundation team. Collaborated in the development of a new feature that helps roll out widgets and layouts in phases before deploying them to production. Utilized Go, React, and Java for project development.",
//             "techStack": ["Go", "React", "Java"]
//         },
//         {
//             "company": "Amazon",
//             "position": "Software Development Engineer Intern",
//             "duration": "Jan 2023 - Mar 2023",
//             "location": "London, England, UK",
//             "description": "At Amazon, during the internship, I contributed to the Prime Video Insights Team by creating a new feature called TicketBot. This feature automated the process of generating links for Insights queries, making it easier for onboarded teams to run queries and handle issues faster when a ticket was cut. I used technologies like Java, TypeScript, AWS Lambda, DynamoDB, and CloudWatch for this project. This experience taught me a lot about building useful features and working well in a team.",
//             "techStack": ["Java", "TypeScript", "AWS Lambda", "DynamoDB", "CloudWatch"]
//         }
//     ],
//     "education": [
//         {
//             "institution": "National Institute of Technology, Hamirpur",
//             "degree": "Bachelor of Technology, Computer Science",
//             "duration": "July 2019 - Oct 2023",
//             "cgpa": "8.36/10.0"
//         }
//     ],
//     "skills": [
//         {
//             "name": "Programming",
//             "data": ["C++", "Java", "JavaScript", "C#"]
//         },
//         {
//             "name": "Frameworks & Databases",
//             "data": ["ReactJs", "Redux", "MongoDB"]
//         },
//         {
//             "name": "Tools & Platforms",
//             "data": ["Git", "AWS", "Unity", "Photoshop"]
//         },
//         {
//             "name": "Achievements",
//             "data": ["Codeforces Expert (Rating: 1800+)", "CodeChef 6-Star (Rating: 2200+)"]
//         }
//     ],

//     "achievements": {
//         "icpc_rankings": [
//             { "event": "Kanpur-Mathura Regional 2020", "rank": 30 },
//             { "event": "Gwalior-Pune Regional 2020", "rank": 85 }
//         ],
//         "codeforces_rating": 1800,
//         "codechef_rating": 2200,
//         "coding_competition_ranks": "Achieved global ranks in coding competitions."
//     }
// }

function App() {
    const [myData, setMyData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {  // Define function correctly
            try {
                const token = process.env.REACT_APP_GITHUB_TOKEN;  // Ensure this token is properly set in .env
                const repoOwner = 'swet-s';
                const repoName = 'CV';
                const filePath = 'resume.json';

                const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/vnd.github.v3.raw',
                    },
                });

                setMyData(response.data);  // Update state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 
    }, []); 

    if (myData === null) return null;

    return (
        <Router>
            <Header text="<Swet/>" resume={myData.resume}/>
            <Routes>
                <Route exact path="/" element={<Home intro={myData.intro} about={myData.about} skills={myData.skills} education={myData.education}/>} />
                <Route exact path="/work" element={<Work projects={myData.projects} workExp={myData.workExp}/>} />
                <Route exact path="/info" element={<Info infoList={myData.infoList}/>} />
            </Routes>
            <Down />
            <Footer text="Swet Portfolio" contacts={myData.contacts} resume={myData.resume}/>
        </Router>
    );
}

export default App;
