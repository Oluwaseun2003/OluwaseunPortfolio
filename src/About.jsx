import React from "react";
import  aboutImg from "../src/about.jpg"
import './about.css'


function Aboutpage() {
    const Dynamic = {
        '--i': 1,
        '--b': 2,
  
       }

    
    return(
        <>
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span> <span className="animatee scroll" style={Dynamic}></span> </h2>
            <div className="about-img">
                <img src={aboutImg} alt="" srcset="" />
                <span className="circle-spin"></span>
                <span className="animatee scroll" style={Dynamic}></span>
            </div>

            <div className="about-content">
                <h3>A Frontend Developer! <span className="animatee scroll" style={Dynamic}></span></h3>
                <p>I embarked on my journey into the world of web development in 2021 with Udemuy. Since then, I've been on an exciting adventure of learning and creating.
                Web development isn't just my job; it's my passion. I thrive on the challenges it presents and the creative solutions it demands. I hold a degree in Computer Science from Yaba college of Technology, and I've had the privilege of working with Eisoft limited, Septa Software where I help build and managed the company’s Website
 Helped with day-to-day operations and administration duties and tasks, 
 Supported the Company in terms of research and development, and 
 Assist in data analysis and presentation. With a strong command of HTML, CSS, and JavaScript, I specialize in building a web and mobile websisites, making it responsive. My proficiency in ReactJs allows me to build a strong and responsive website. When I'm not coding, you can often find me dancing, reading, cooking and playing games. These activities help me recharge and bring fresh perspectives to my work. I'm excited about the future of web development and am eager to contribute to open-source projects, learn a new technology, mentor aspiring developers.</p>








                    <span className="animatee scroll" style={Dynamic}></span>
                

                <div className="btn-box btns">
                    <a href="#" className="btn">Read More</a>
                    <span className="animatee scroll" style={Dynamic}></span>
                </div>
            </div>
        </section>
        
        </>

    )
    
}export default Aboutpage