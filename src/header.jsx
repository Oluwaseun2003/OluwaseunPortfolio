import React from "react";
import { ReactEventHandler } from "react";
import  ReactDOM  from "react-dom";
import "boxicons";
import './header.css'

function toggleBurger() {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
  
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  }


  function handleScroll() {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");
    let menuIcon = document.querySelector("#menu-icon"); 
  let navbar = document.querySelector(".navbar"); 
  
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
  
        let activeNavLink = document.querySelector("header nav a[href*=" + id + "]");
        if (activeNavLink) {
          activeNavLink.classList.add("active");
        }
  
        // Activate sections for animation on scroll
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });
  
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  
    // REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINKS (SCROLL)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
  
  window.onscroll = handleScroll;
  

function Header() {

      const Dynamic = {
       '--i': 1,
       '--b': 2

      }

    return (
        <>
        <header className="header">
           <a href="#" className="logo">Oluwaseun <span className="animate" style={Dynamic}></span></a>
   
           <div onClick={toggleBurger} className="bx bx-menu" id="menu-icon">
           <span className="animate" style={Dynamic}></span>

           </div>
   
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>

                <span className="active-nav"></span>
                <span className="animate" style={Dynamic}></span>
            </nav>
        </header>
       </>
    )

}

export default Header