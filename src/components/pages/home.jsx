import React from "react";
import { BannerBio } from "../layouts/bannerBio";
import { Skills } from "../layouts/skills";
import { Tabs } from "../layouts/tabs";

 // Array of tabs
const navLinks = [
  { itemClass: 'skills', link : '/'},
  { itemClass: 'projects', link: '/projects'},
  { itemClass: 'certificate', link: '/certificate'}
]


export const Home = () => {
    // const links = navLinks.map(navLink =>
    //     <li key={navLink.page}>
    //       {navLink.link}
    //     </li>
    // );
    
    // const page = navLinks.map(navLink =>
    //     <li key={navLink.link}>
    //       {navLink.page}
    //     </li>
    // );
    return(
        <>
        <BannerBio />
        <Tabs />
        {/* <Skills /> */}
        {/* <ProjectsSkillConst /> */}
        {/* <ProjectsSkillConstT /> */}
        </>
    );
}