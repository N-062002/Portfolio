import React, {useState} from "react";
// import HtmlIcon from '@mui/icons-material/Html';
// import { Height } from "@mui/icons-material";

export const Tabs = () => {

    // adding style in icons
    const cardIcon = {
        width: "100%",
        Height: "100%"
    }

    const [ toggle,setToggle ] = useState(1);

    function updateToggle(id) {
        setToggle(id)
    }
    return(
        <>
        <section className="projects-gallery">
            <div className="tabs">
                <li 
                className={toggle === 1 ? "active-tab" : ""}
                onClick={() => updateToggle(1)}>Skills</li>
                <li 
                className={toggle === 2 ? "active-tab" : ""}
                onClick={() => updateToggle(2)}>Projects</li>
                <li 
                className={toggle === 3 ? "active-tab" : ""}
                onClick={() => updateToggle(3)}>Certificate</li>
            </div>
            <div className={toggle === 1 ? "skills" : "content"}>
                <div className="skill-card"></div>
                <div className="skill-card"></div>
                <div className="skill-card"></div>
                <div className="skill-card"></div>
                <div className="skill-card"></div>
                <div className="skill-card"></div>
            </div>
            <div className={toggle === 2 ? "projects" : "content"}>
                <div className="project-card"></div>
                <div className="project-card"></div>
                <div className="project-card"></div>
                <div className="project-card"></div>
                <div className="project-card"></div>
                <div className="project-card"></div>
            </div>
            <div className={toggle === 3 ? "certificates" : "content"}>
                <div className="certificate-card"></div>
                <div className="certificate-card"></div>
                <div className="certificate-card"></div>
                <div className="certificate-card"></div>
                <div className="certificate-card"></div>
                <div className="certificate-card"></div>
            </div>
        </section>
        </>
    );
}