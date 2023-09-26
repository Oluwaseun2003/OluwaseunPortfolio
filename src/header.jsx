import React from "react";
import  ReactDOM  from "react-dom";
import "boxicons";
import './header.css'


function Header() {

let menuIcon = document.querySelector("#menu-icon")
let navBar = document.querySelector("navbar")
   
// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle("bx-x")
//     navBar.classList.onclick("active")
// }




    

   

    let sections = document.querySelectorAll("section")
    let navLinks = document.querySelectorAll("header nav a")


    window.onscroll = () =>{
       sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links =>{
                links.classList.remove("active")
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        }
       })


        let header = document.querySelector("header")
      
        header.classList.toggle("sticky", window.scrollY > 100)
      }

    return (
        <>
        <header className="header">
           <a href="#" className="logo">Oluwaseun</a>
   
           <div className="bx bx-menu" id="menu-icon"></div>
   
           <nav className="navbar" id="navbar">
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