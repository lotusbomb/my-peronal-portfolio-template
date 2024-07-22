import React from "react";

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers project-container">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/meta-website.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Meta Website using HTML, CSS & JavaScript</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href = "https://github.com/lotusbomb/")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://main--meta-website-model.netlify.app/")
                }
              >
                Live Demo
              </button>
            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/react-portfolio.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Portfolio using React and Tailwind CSS</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/lotusbomb/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://first-portfolio-with-react.netlify.app/'"
              >
                Live Demo
              </button>
            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/normal-website.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Educational Landing Page using HTML, CSS & JavaScript</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/lotusbomb/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://main--eeducational-landing-page.netlify.app/'"
              >
                Live Demo
              </button>
            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/social-profile.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Social Profile using HTML and CSS</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/lotusbomb/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://main--social-link-profile-fem.netlify.app/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
}

export default Projects;
