import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="About">
        <h1 className="about-title">About Me</h1>
        <p className="smaller-heading1">
          My name is Jason, I am a fourth-year computer engineering student at
          the University of Waterloo with a strong interest in software
          engineering. I enjoy problem-solving, and I like building systems that
          are both clean and reliable. I’m especially interested in backend
          development, APIs, and AI/ML.
        </p>
        <p className="smaller-heading2">
          Previously, I was a Software Engineer Intern at Ford Pro on the
          Notifications team, where I contributed to workflow automation,
          front-end improvements, and functional API testing. I’m currently a
          Software Engineer Intern at Marketing Kitchen, working with APIs and
          creating a data warehouse to manage data flow across internal services
          and databases. Next, I’m looking forward to joining IBM, where I’m
          excited to keep learning and contribute to engineering work at scale.
        </p>
        <p className="smaller-heading3">
          When I’m not at my desk, I enjoy listening to music, playing
          basketball, going to the gym, gaming (Minecraft, Fortnite, Clash
          Royale), or going for a drive.
        </p>
      </div>
    </section>
  );
};

export default About;
