import React from "react";
import "./HomeSection.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTypewriter } from "react-simple-typewriter";
export default function HomeSection() {
  const [text] = useTypewriter({
    words: ["Passionate about changing the world with technology."],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 0,
  });
  return (
    <>
      <div className="home-page">
        <div className="container-home">
          <h1 className="name">Tanzeel Ansari</h1>
          <h5 className="content">{text}</h5>
          <div className="social-media">
            <a  href="https://github.com/gi-t-ansari" target="_blank"><GitHubIcon sx={{fontSize: "50px"}} /></a>
            <a  href="https://www.facebook.com/shamsh.tanzeel.3?mibextid=ZbWKwL" target="_blank"><FacebookIcon sx={{fontSize: "50px"}} /></a>
            <a  href="https://www.instagram.com/tanzeel_18.12?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><InstagramIcon sx={{fontSize: "50px"}} /></a>
            <a  href="https://www.linkedin.com/in/tanzeel-ansari-2a1327237/" target="_blank"><LinkedInIcon sx={{fontSize: "50px"}} /></a>
          </div>
          <div className="button">
            <a className="about-me-btn" href="#About">More about me</a>
          </div>
        </div>
      </div>
    </>
  );
}