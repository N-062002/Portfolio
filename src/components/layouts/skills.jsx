import React from "react";
import { NavLink } from "react-router-dom";
import { BannerBio } from "./bannerBio";
import { ProjectsSkillConstT } from "./projectSkillContT";

export const Skills = () => {
    return(
        <>
        {/* <section className="skills">
        <div className="tabs">
                <NavLink to="/">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/certificate">Certificate</NavLink>
            </div>
            <div className="item-grid">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </section> */}
        <BannerBio />
        <ProjectsSkillConstT />
        </>
    );
}