import React from 'react';
import Card from './Card';
import "./ProjectSection.css"

const projectData = [{
    heading : "QTify",
    demo : "https://qtify-tanzeel-complete.netlify.app/",
    code : "https://github.com/gi-t-ansari/QTify-Complete.git",
    techStack : "ReactJS JavaScript HTML CSS Material-UI",
    date : "May 2023"
},
{
    heading : "QKart",
    demo : "https://qkart-tanzeel.netlify.app/",
    code : "https://github.com/gi-t-ansari/QKart-Frontend.git",
    techStack : "ReactJS JavaScript HTML CSS Material-UI",
    date : "April 2023"
},
{
    heading : "QTrip Dynamic",
    demo : "https://qtrip-dynamic-tanzeel.netlify.app/",
    code : "https://github.com/gi-t-ansari/QTrip-Dynamic_Tanzeel.git",
    techStack : "JavaScript HTML CSS Bootstrap",
    date : "May 2023"
},
{
    heading : "QTrip Static",
    demo : "https://tanzeel-qtrip.netlify.app/",
    code : "https://github.com/gi-t-ansari/QTrip.git",
    techStack : "HTML CSS Bootstrap",
    date : "May 2023"
}]

function ProjectSection() {
  return (
    <div className='projectSectionContainer' id='Projects'>
        <h1>Recent Projects</h1>
        <div className='cardsContainer'>
            {projectData.map((project) => <Card heading={project.heading} demo={project.demo} code={project.code} techStack={project.techStack} date={project.date} /> )}
        </div>
    </div>
  )
}

export default ProjectSection