import React from "react";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/photo2.jpg" alt="profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Onyinyechi Favour</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/WebCv.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/onyinye-favour/")
            }
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/lotusbomb/")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
