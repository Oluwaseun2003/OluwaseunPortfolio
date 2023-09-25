import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'
import Homepage from './Homepage.jsx'
import Aboutpage from './About.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />,
    <Homepage />,
    <Aboutpage />,
    <Education />,
    <Skills />
  </>
)
