import React from "react";
import { NavLink } from "react-router-dom";



export const ProjectsSkillConst = (props) => {
    const gridColor = {
        color: "white",
        backgroundColor : "green"
    };

     // Array of tabs
 const navLinks = [
    { itemClass: 'skills', label: 'Skills', link : '/', id: '1'},
    { itemClass: 'projects', label: 'Projects', link: '/projects', id: '2'},
    { itemClass: 'certificate', label: 'Certificate', link: '/certificate', id: '3'}
  ]
    return(
        
        <>
        <section className="projects">
            <div className="tabs">
            {navLinks.map((navLink) => (
                <NavLink
                    key={navLink.id}
                    to={navLink.link}
                    // className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        {navLink.label}
                </NavLink>
        ))}
                {/* <NavLink to="/">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/certificate">Certificate</NavLink> */}
            </div>
            <div className="item-grid">
                <div className="card"></div>
                <div className="card" style={gridColor}>{props.link}{props.page}</div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </section>
        </>
    );
}