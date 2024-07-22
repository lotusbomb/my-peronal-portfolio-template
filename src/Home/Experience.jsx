import React from "react";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JAVASCRIPT</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>TAILWIND</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>REACT</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>RESTFUL APIs</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>GIT/GITHUB</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
}

export default Experience;
