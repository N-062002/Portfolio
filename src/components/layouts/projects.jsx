import React from "react";
import { BannerBio } from "../layouts/bannerBio";
import { ProjectsSkillConstT } from "./projectSkillContT";
// import { ProjectsSkillConst } from "../layouts/projectsSkillCont";

export const Projects = () => {
    return(
        <>
        <BannerBio />
        <ProjectsSkillConstT />
        {/* <ProjectsSkillConst /> */}
        </>
    );
}