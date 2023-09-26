import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'
import Homepage from './Homepage.jsx'
import Aboutpage from './About.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './index.css'


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

       // active sections for animation on scroll
       sec.classList.add("show-animate")
   } else {
       sec.classList.remove("show-animate")


   }



  })
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />,
    <Homepage />,
    <Aboutpage />,
    <Education />,
    <Skills />, 
    <Contact />,
    <Footer />
  </>
)
