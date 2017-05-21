import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/profile.jpg"

const Header = () => (
 <div className="Header"> 

       <div className="photo">
       <img src={logo}/>
       </div>
       <div className ="name">
         RAHUL MAHESHWARI
       </div>
       <div className="designation">
         UI DEVELOPER | FRONTEND DEVELOPER
       </div>
       <nav className="navbar navbar-inverse">
         <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="library">PROFILE</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
    </div>
  </div>
</nav>
  
<div className="container">
  <h3>Collapsible Navbar</h3>
  <p>Only when the button is clicked, the navigation bar will be displayed.</p>
</div>
</div>
   
 
);

export default Header;
