import React from "react";
import  ReactDOM  from "react-dom";
import "boxicons";
import './header.css'

function Header() {
    return (
        <>
        <header className="header">
           <a href="#" className="logo">Oluwaseun</a>
   
           <div className="bx bx-menu" id="menu-icon"></div>
   
           <nav className="navbar">
               <a href="#home" className="active">Home</a>
               <a href="#about">About</a>
               <a href="#education">Education</a>
               <a href="#skills">Skills</a>
               <a href="#contact">Contact</a>
           </nav>
        </header>
       </>
    )

}

export default Header