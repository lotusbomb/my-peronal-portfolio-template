import React from "react";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiNpm, SiRedux, SiTypescript, SiVite } from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";

const icons = [
  <FaHtml5/>, <FaCss3Alt/>, <IoLogoJavascript/>, <FaReact/>, <RiTailwindCssFill/>, <SiTypescript/>, <RiNextjsFill/>, <SiRedux/>, <SiFramer/>, <FaGithub/>, <FaGitAlt/>, <SiVite/>, <SiNpm />, <FaNodeJs />, <DiMongodb />, <TbSql />, <TbApi />,
]

function Experience() {
  return (
    <section id="experience">
      <div className="about">
        <h1 className="span-n">Take A Look At My</h1>
        <p className="paragraph-h">Experience</p>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container det">
              <div className="article-container">
              {icons.map((list, index) => (
                <div className="icons" key={index} >
                  <span>{list}</span>
                </div>
              ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
