import React from "react";

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/photo2.jpg"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Sc. Human Anatomy
                <br />
                University of Nigeria, Nsukka
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a creative and thorough front-end web developer with two
              years of experience. Designing, developing, and maintaining online
              applications and responsive websites capable with HTML5, CSS3,
              JavaScript, and well-known frameworks like React and React Native. I have an excellent sense of design and knows how to
              translate UI/UX concepts into well-written code. I am committed to
              enhancing web performance and producing seamless user experiences
              by employing state-of-the art techniques and best practices.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
}

export default About;
