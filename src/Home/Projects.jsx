import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const items =[
  {
    image: "./assets/meta-website.png",
    title: "Meta Website using HTML, CSS & JavaScript",
    button1: "Github",
    button2: "Live Demo",
    linkg: "https://github.com/lotusbomb/Meta-model-website",
    linkl: "https://main--meta-website-model.netlify.app/",
    icon1: <FaHtml5 />,
    icon2: <FaCss3Alt />,
    icon3: <IoLogoJavascript />
  },
  {
    image: "./assets/provision.png",
    title: "ProVision Official Website",
    button1: "Github",
    button2: "Live Demo",
    linkg: "https://github.com/lotusbomb/ProVision",
    linkl: "https://pro-vision.vercel.app/",
    icon1: <FaHtml5 />,
    icon2: <FaCss3Alt />,
    icon3: <IoLogoJavascript />,
    icon4: <FaReact />,
    icon5: <RiTailwindCssFill />,
  },
  {
    image: "./assets/normal-website.png",
    title: "Educational Landing Page using HTML, CSS & JavaScript",
    button1: "Github",
    button2: "Live Demo",
    linkg: "https://github.com/lotusbomb/Educational-website-landing-page",
    linkl: "https://eeducational-landing-page.netlify.app/",
    icon1: <FaHtml5 />,
    icon2: <FaCss3Alt />,
    icon3: <IoLogoJavascript />
  },
  {
    image: "./assets/social-profile.png",
    title: "Social Profile using HTML and CSS",
    button1: "Github",
    button2: "Live Demo",
    linkg: "https://github.com/lotusbomb/Social-Link-Profile",
    linkl: "https://social-link-profile-fem.netlify.app",
    icon1: <FaHtml5 />,
    icon2: <FaCss3Alt />
  },
  {
    image: "./assets/saas website.png",
    title: "SaaS website",
    button1: "Github",
    button2: "Live Demo",
    linkg: "https://github.com/lotusbomb/saas-website",
    linkl: "https://saas-website-tan.vercel.app/",
    icon1: <FaHtml5 />,
    icon2: <FaCss3Alt />,
    icon3: <RiNextjsFill />,
    icon4: <FaReact />,
    icon5: <RiTailwindCssFill />,
    icon6: <SiTypescript />
  },
  {
    image: "./assets/skyline.png",
    title: "A real estate landing page",
    button1: "Github",
    button2: "Live Demo",
    linkg: "https://github.com/lotusbomb/skyline-properties",
    linkl: "https://skyline-properties.vercel.app/",
    icon1: <FaHtml5 />,
    icon2: <FaCss3Alt />,
    icon3: <RiNextjsFill />,
    icon4: <FaReact />,
    icon5: <RiTailwindCssFill />,
    icon6: <SiTypescript />
  },
  {
    image: "./assets/shopping-cart.png",
    title: "A shopping cart with few functions",
    button1: "Github",
    button2: "Live Demo",
    linkg: "https://github.com/lotusbomb/shopping-cart-practice",
    linkl: "https://shopping-cart-practice.vercel.app/",
    icon1: <FaHtml5 />,
    icon2: <FaCss3Alt />,
    icon4: <FaReact />,
    icon6: <SiTypescript />
  },
]

function Projects() {
  return (
    <section id="projects">
      <h1 className="span-n">Browse My Recent</h1>
      <p className="paragraph-h">Projects</p>
      <div className="container">
        {items.map((index) => (
          <div key={index.title} className="containers">
            <div className="image">
              <img src={index.image} alt="" />
            </div>
            <p className="spacing">{index.title}</p>
            <div className="icon">
              <a className="mini-icon" href="/">{index.icon1}{index.icon2}{index.icon3}{index.icon4}{index.icon5}{index.icon6}</a>
            </div>
            <div className="button">
              <button className="btn btn-1 btnn"><a href={index.linkg}>{index.button1}</a></button>
              <button className="btn btn-2 btnn"><a href={index.linkl}>{index.button2}</a></button>
            </div>
          </div>
        ))}
      </div>
        
    </section>
  );
}

export default Projects;
