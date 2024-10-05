import React from "react";

function About() {
  return (
    <section id="about">
      <div className="about">
        <h1 className="span-n">Get To Know More</h1>
        <p className="paragraph-h">About Me</p>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className="icons"
                />
                <h3>Experience</h3>
                <p>2+ years <br />Frontend Development/Full Stack</p>
              </div>
              <div className="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className="icons"
                />
                <h3>Education</h3>
                <p>
                  B.Sc. Human Anatomy
                  <br />
                  University of Nigeria, Nsukka
                </p>
              </div>
            </div>
            <div >
              <p className="content">
                I am a passionate full-stack developer with 2 years of experience, eager to contribute to innovative software and app development projects. Proficient in both front-end and back-end technologies like React, Node.js, MongoDB, and SQL, I enjoy building interactive, responsive user interfaces and crafting solid back-end infrastructures.

                I thrive in collaborative environments where I can apply my skills to deliver high quality products. My goal is to contribute to projects that push the boundaries of what technology can achieve, all while delivering seamless, high-quality user experiences.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
