import React from "react";
import { FaGithub } from "react-icons/fa";
import resume from "../assets/2026Resume.pdf";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="Home">
        <h1 className="home-title">
          Welcome! My name is Jason.
        </h1>
        <TypeAnimation
          className="typeanimation"
          sequence={[
            "I'm an aspiring engineer",
            1500,
            "I'm a music enthusiast",
            1500,
            "I'm an ECE student at UWaterloo",
            1500,
          ]}
          wrapper="span"
          speed={200}
          deletionSpeed={200}
          repeat={Infinity}
          cursor={false}
        />
        <p className="smaller-heading">
          You will find everything you need to know about me here. Enjoy.
        </p>
        <a
          href={resume}
          className="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          href="https://github.com/jasonliu1103"
          className="github-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Home;
