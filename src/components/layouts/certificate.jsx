import React from "react";
import { NavLink } from "react-router-dom";
import { BannerBio } from "./bannerBio";
import { ProjectsSkillConstT } from "./projectSkillContT";

export const Certificate = () => {
     const cardColor = {
        backgroundColor : "red"
    }
    return(
        <>
        <BannerBio />
        {/* <section className="certificate">
            <div className="tabs">
                <NavLink to="/">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/certificate">Certificate</NavLink>
            </div>
            <div className="item-grid">
                <div className="card" style={gridColor}>Certficate</div>
                <div className="card" style={gridColor}>Certficate</div>
                <div className="card" style={gridColor}>Certficate</div>
                <div className="card" style={gridColor}>Certficate</div>
                <div className="card" style={gridColor}>Certficate</div>
                <div className="card" style={gridColor}>Certficate</div>
            </div>
        </section> */}
        <ProjectsSkillConstT text="Hello Props"/>
        </>
    );
}