import React from "react";
import  aboutImg from "../src/about.jpg"

function Aboutpage() {
    
    return(
        <>
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
                <img src={aboutImg} alt="" srcset="" />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3>Frontend Developer</h3>
            </div>
        </section>
        
        </>

    )
    
}export default Aboutpage