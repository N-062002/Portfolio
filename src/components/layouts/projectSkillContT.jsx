import React,{useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { GridItem } from "./gridItem";



export const ProjectsSkillConstT = (props) => {

    // using location
    const location = useLocation();

    // activaPage
    const [activaPage, setActivePage] = useState(location.pathname);

    // function to handle Page Change
    const handlePageChange = (page) => {
        setActivePage(page);
    };

    // Using usestate
    const [isSelected, setIsSelected] = useState(0)
    const gridColor = {
        color: "white",
        backgroundColor : "lightblue"
    };

    // Array of Grid Class
    const itemClass = [
        "skills","projects","certificate"   
    ]

     // Array of tabs
 const data = [
    // {
    //     outerClass: 'tabs',

    //     label: [
    //         'Skills','Projects','Certificate'
    //     ],
    //     link: [
    //         '/skills','/projects','certificate'
    //     ],

    //     itemClass: [
    //         'skills','certificate','projects'
    //     ]
    // }
    {
        itemClass: [
            'skills','projects','certificate'
        ]
    }
    ,
    { itemClass: 'skills', label: 'Skills', link : '/skills', id: '1', gridItems: [ 
        "item 1", "item2", "item3"
    ]},
    { itemClass: 'projects', label: 'Projects', link: '/projects', id: '2',  gridItems: [ 
        "item 21", "item22", "item23"
    ]},
    { itemClass: 'certificate', label: 'Certificate', link: '/certificate', id: '3',  gridItems: [ 
        "item 31", "item32", "item33"
    ]}
  ]

  const gridItems = [
    

    
  ]
    return(
        
        <>
        <section className="projects">
                <div className="tabs">
            {data.map((item,index) => (
                    <NavLink
                       key={index}
                        to={item.link}>
                        {item.label}
                    </NavLink>
               
            ))}
            </div>
        {/* {navLinks.map((navLink) => (
            <div className="tabs">
                <NavLink
                    key={navLink.id}
                    to={navLink.link}
                    >
                        {navLink.label}
                </NavLink>
       
                
            </div>
        ))} */}


        {/* <GridItem activaPage={activaPage} handlePageChange={handlePageChange}/> */}


        {/* <NavLink to="/">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/certificate">Certificate</NavLink> */}
            {/* <div className="item-grid">
                <div className="card" style={props.text}></div>
                <div className="card" style={gridColor}></div>
                <div className="card" style={gridColor}></div>
                <div className="card" style={gridColor}></div>
                <div className="card" style={gridColor}></div>
                <div className="card" style={gridColor}></div>
            </div> */}
        </section>
        </>
    );
}