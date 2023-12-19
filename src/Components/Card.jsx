import React from 'react';
import "./Card.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function Card({heading, demo, code, techStack, date}) {
  return (
    <div className='cardContainer'>
        <h3>{heading}</h3>
        <div className='card-links'>
            <a href={demo} target='_blank'><GitHubIcon /><span>Clone Project</span></a>
            <a href={code} target="_blank"><GitHubIcon /><span>Code</span></a>
        </div>
        <hr />
        <p className='techStack'>Tech Stack : <span>{techStack}</span></p>
        <p>{date}</p>
    </div>
  )
}

export default Card