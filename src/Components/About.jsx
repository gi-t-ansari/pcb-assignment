import React from "react";
import "./About.css";
import pic from "../Assets/pic.png";
export default function About() {
  return (
    <div className="about-me" id="About">
      <div className="my-img">
        <img width={400} className="img" src={pic} alt="Tanzeel_Ansari" />
      </div>
      <div className="container">
      <h1 className="title-about">About Me</h1><br/>
      <div className="details-about">
      <p>
        My name is Tanzeel Ansari. I am a Frontend Developer mostly worked on React SPA,s. I enjoy designing & building eye catching user interfaces.
        Apart from that I do write poetry as well.
      </p>
      </div>
      <div className="resume-btn">
        <a className="resume" href="https://drive.google.com/file/d/1dwcHoVO7dYXyNEQ76BHJbOX81MHtjtE4/view?usp=sharing" target="_blank">
            Resume
        </a>
    </div>
      </div>
    </div>
  );
}