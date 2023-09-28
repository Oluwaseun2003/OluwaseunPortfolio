import React from "react";
import './education.css'


function Education() {

    const Dynamic = {
        '--i': 1,
        '--b': 2,
        '--c': 3,
        '--d': 4,
        '--e': 5,
        '--f': 6,
        '--g': 7,
        '--h': 8,
        '--j': 9,
        '--k': 10,
        '--l': 11,
        '--m': 12,
        '--n': 13,
        '--o': 14,
        '--p': 15,
        '--q': 16,


 
       }
    return(
        <>
        <section className="education" id="education">
            <h2 className="heading">
                My <span>Journey</span>
                <span className="animate scroll" style={Dynamic}></span>
            </h2>

            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">Education
                <span className="animate scroll" style={Dynamic}></span>
                    </h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                 <div className="year"><i class='bx bxs-calendar'></i> 2016-2021</div>
                                 <h3>SSCE - Cherished Child Schools</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum nulla alias a quam nisi necessitatibus voluptatibus nemo voluptate iusto, quidem est molestias ducimus eaque voluptatem odio, doloribus, mollitia minima!</p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                 <div className="year"><i class='bx bxs-calendar'></i> 2022-2023</div>
                                 <h3>OND - Yaba College Of Technology</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum nulla alias a quam nisi necessitatibus voluptatibus nemo voluptate iusto, quidem est molestias ducimus eaque voluptatem odio, doloribus, mollitia minima!</p>
                            </div>
                        </div>


                        <div className="education-content">
                            <div className="content">
                                 <div className="year"><i class='bx bxs-calendar'></i> 2024-2025</div>
                                 <h3>HND - Yaba College Of Technology</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum nulla alias a quam nisi necessitatibus voluptatibus nemo voluptate iusto, quidem est molestias ducimus eaque voluptatem odio, doloribus, mollitia minima!</p>
                            </div>
                        </div>


                        <div className="education-content">
                            <div className="content">
                                 <div className="year"><i class='bx bxs-calendar'></i> 2029-2030</div>
                                 <h3>Masters Degree - University of Birmingham</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum nulla alias a quam nisi necessitatibus voluptatibus nemo voluptate iusto, quidem est molestias ducimus eaque voluptatem odio, doloribus, mollitia minima!</p>
                            </div>
                        </div>
                <span className="animate scroll" style={Dynamic}></span>
                        
                    </div>
                </div>


                <div className="education-column">
                <span className="animate scroll" style={Dynamic}></span>
                    <h3 className="title">Experience
                <span className="animate scroll" style={Dynamic}></span>
                    
                     </h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                 <div className="year"><i class='bx bxs-calendar'></i> 2021-2022</div>
                                 <h3>Intern Web Developer - Eisoft Limited</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum nulla alias a quam nisi necessitatibus voluptatibus nemo voluptate iusto, quidem est molestias ducimus eaque voluptatem odio, doloribus, mollitia minima!</p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                 <div className="year"><i class='bx bxs-calendar'></i> 2022-2023</div>
                                 <h3>Frontend Web Developer - Eisoft Limited</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum nulla alias a quam nisi necessitatibus voluptatibus nemo voluptate iusto, quidem est molestias ducimus eaque voluptatem odio, doloribus, mollitia minima!</p>
                            </div>
                        </div>


                        <div className="education-content">
                            <div className="content">
                                 <div className="year"><i class='bx bxs-calendar'></i> 2023</div>
                                 <h3>Web Developer - Septa Software</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum nulla alias a quam nisi necessitatibus voluptatibus nemo voluptate iusto, quidem est molestias ducimus eaque voluptatem odio, doloribus, mollitia minima!</p>
                            </div>
                        </div>


                        <div className="education-content">
                            <div className="content">
                                 <div className="year"><i class='bx bxs-calendar'></i> 2023</div>
                                 <h3>Web Developer - ATOS</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum nulla alias a quam nisi necessitatibus voluptatibus nemo voluptate iusto, quidem est molestias ducimus eaque voluptatem odio, doloribus, mollitia minima!</p>
                            </div>
                        </div>
                <span className="animate scroll" style={Dynamic}></span>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Education