import React from "react";
import { ReactDOM } from "react-dom";
import './skills.css'

function Skills() {
    return(
        <>
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span></h2>


            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Coding Skills</h3>


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
                    </div>
                </div>


                <div className="skills-column">
                    <h3 className="title">Professional Skills</h3>

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
                </div>





            </div>

        </section>
        </>
    )
}

export default Skills