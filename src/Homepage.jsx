import React from "react";
import { ReactDOM } from "react-dom";
import './Homepage.css'







function Homepage() {
    

    const Dynamic = {
        '--i': 1,
        '--b': 2,
        '--c': 3,
        '--d': 4,
        '--e': 5,
        '--f': 6,
        '--g': 7,
 
       }

    return(
        <>
        <section className="home show-animate" id="home">
            <div className="home-content">
                <h1>Hi I'm <span>Oluwaseun </span><span className="animate" style={Dynamic}></span></h1>
                <div className="text-animate">
                    <h3>Frontend Developer</h3>
                    <span className="animate" style={Dynamic}></span>
                </div>
                <p>I'm deeply passionate about creating visually appealing and interactive websites. With 2 years of experience, I specialize in creating responsive and user-friendly web interfaces.
                I have a strong command of HTML, CSS, and JavaScript, along with expertise in ReactJs. I thrive on tackling complex challenges and delivering elegant solutions that exceed client expectations.

                </p>


                    <span className="animate" style={Dynamic}></span>

                    <div className="btn-box">
                        <a href="https://docs.google.com/document/d/1GNxzVLqyAXqhiEoNKvHlfSifd_xLTt7D/edit?usp=sharing&ouid=106320259637143680835&rtpof=true&sd=true" target="blank" className="btn">Download cv</a>
                        <a href="#" className="btn">Let's talk</a> 
                    <span className="animate" style={Dynamic}></span>

                    </div>
            </div>

            <div className="home-sci">
                <a href="#">
                    <i class='bx bxl-facebook'></i>                   
                 </a>
                <a target="blank" href="https://twitter.com/Oluwaseun1511">
                <i class='bx bxl-twitter' ></i>
                </a>
                <a target="blank" href="https://www.linkedin.com/in/oluwaseun-oluwafemi-37b942229/">
                <i class='bx bxl-linkedin' ></i>
                </a>
                <span className="animate" style={Dynamic}></span>

            </div>

            <div className="home-imgHover">
            <span className="animate home-img" style={Dynamic}></span>

                
            </div>
        </section>
        </>
    )
}

export default Homepage
