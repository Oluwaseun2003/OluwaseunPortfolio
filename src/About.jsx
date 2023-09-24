import React from "react";
import  aboutImg from "../src/about.jpg"

function Aboutpage() {
    
    return(
        <>
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
                <img src={aboutImg} alt="" srcset="" />
            </div>
        </section>
        
        </>

    )
    
}export default Aboutpage