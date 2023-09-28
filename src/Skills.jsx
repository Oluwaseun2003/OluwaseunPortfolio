import React from "react";
import { ReactDOM } from "react-dom";
import './skills.css'

function Skills() {
    // const Dynamic = {
    //     '--i': 1,
    //     '--b': 2,
    //     '--c': 3,
    //     '--d': 4,
    //     '--e': 5,
    //     '--f': 6,
    //     '--g': 7,
    //     '--h': 8,
    //     '--j': 9,
    //     '--k': 10,
    //     '--l': 11,
    //     '--m': 12,
    //     '--n': 13,
    //     '--o': 14,
    //     '--p': 15,
    //     '--r': 16,
    //     '--s': 16,
    //     '--t': 16,
    //     '--u': 16,
    //     '--v': 16,
    //     '--w': 16,
 
    //    }

    return(
        <>
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span>
            {/* <span className="animatee scroll" style={Dynamic}></span> */}
            
            </h2>


            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Coding Skills
                     {/* <span className="animatee scroll" style={Dynamic}></span> */}
                     </h3>


                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>HTML <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                            <div className="progress">
                                <h3>CSS <span>80%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                            <div className="progress">
                                <h3>JavaScript <span>85%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                            <div className="progress">
                                <h3>ReactJs <span>80%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                        </div>
                {/* <span className="animatee scroll" style={Dynamic}></span> */}

                    </div>
                </div>


                <div className="skills-column">
                    <h3 className="title">Professional Skills
                {/* <span className="animatee scroll" style={Dynamic}></span> */}
                    
                    </h3>

                        <div className="skills-box">
                            <div className="skills-content">
                                <div className="progress">
                                    <h3>Web Design <span>70%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Web Development <span>80%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Version Control <span>75%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>ReactJs <span>80%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                {/* <span className="animatee scroll" style={Dynamic}></span> */}

                </div>





            </div>

        </section>
        </>
    )
}

export default Skills