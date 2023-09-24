import React from "react";
import './Homepage.css'

function Homepage() {
    return(
        <>
        <section className="home" id="home">
            <div className="home-content">
                <h1>Hi I'm <span>Oluwaseun </span></h1>
                <div className="text-animate">
                    <h3>Frontend Developer</h3>
                </div>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta, commodi maiores cum distinctio eos quasi excepturi voluptate reprehenderit ut qui corrupti iusto iste suscipit obcaecati sit ea beatae ab?</p>
                    <div className="btn-box">
                        <a href="#" className="btn">Hire Me</a>
                        <a href="#" className="btn">Let's talk</a> 

                    </div>
            </div>

            <div className="home-sci">
                <a href="#">
                    <i class='bx bxl-facebook'></i>                   
                 </a>
                <a href="#">
                <i class='bx bxl-twitter' ></i>
                </a>
                <a href="#">
                <i class='bx bxl-linkedin' ></i>
                </a>
            </div>

            <div className="home-imgHover">
                
            </div>
        </section>
        </>
    )
}

export default Homepage