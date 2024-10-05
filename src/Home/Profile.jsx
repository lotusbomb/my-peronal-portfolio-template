import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Profile() {
  return (
    <section>
      <div className="profile">
        <div className="picture">
          <img src="./assets/photo2.jpg" alt="profile"/>
        </div>
        <div className="text">
          <p className="paragraph">Hello, I'm</p>
          <h1 className="span">Onyinyechi Favour</h1>
          <p className="paragraph">Full Stack Developer-Front End</p>
          <div className="btn-container">
            <button
              className="btn btn-1"
              onClick={() => window.open("./assets/ONYINYECHI FAVOUR TECH CV.pdf")}
            >
              Download CV
            </button>
            <button
              className="btn btn-2"
              onClick={() => (window.location.href = "mailto:chukwumafavour600@gmail.com")}
            >
              Email Me
            </button>
            <button
              className="btn btn-1"
              onClick={() => (window.location.href = "https://wa.link/flf65i")}
            >
              Message Me
            </button>
            
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/onyinye-favour/"><FaLinkedin/></a>
            <a href="https://github.com/lotusbomb/"><FaGithub/></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
