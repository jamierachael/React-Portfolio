import React from 'react';


export default function Nav() {


    return {

        < nav className = "white" role = "navigation" >
        <div className="nav-wrapper container">
            <a id="logo-container" href="#" class="brand-logo">Jamie Rachael</a>
            <ul className="right hide-on-med-and-down">

                <li><a href="about.html">About</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="resume.html">Resume</a></li>
            </ul>

            <ul id="nav-mobile" class="sidenav">

                <li><a href="about.html">About</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="resume.html">Resume</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
        </nav >

      

    }

}