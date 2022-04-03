import React from "react";
import "./body.css";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skils from "./skils/Skils";
import Work from "./Work/Work";
import Contact from "./contact/Contact";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skils">
        <Skils />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
