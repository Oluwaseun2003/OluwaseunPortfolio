import React from "react";
import  aboutImg from "../src/about.jpg"
import './about.css'

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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat suscipit illo aut excepturi iure, quos error ex maxime, nemo molestias dolore, doloribus eveniet expedita necessitatibus? Recusandae modi in enim.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus similique quae numquam iusto itaque minima dicta voluptatem adipisci, eum, dignissimos laborum ut quidem! Distinctio exercitationem reprehenderit vero animi natus architecto.
                </p>

                <div className="btn-box btns">
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
        
        </>

    )
    
}export default Aboutpage