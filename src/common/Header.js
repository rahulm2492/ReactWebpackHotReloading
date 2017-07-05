import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/profile.jpg"

const Header = () => (
 <div className="Header"> 

       
       <nav className="navbar navbar-inverse">
         <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="/">PROFILE</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Home</a></li>
        <li><a href="/Skills">Skills</a></li>
        <li><a href="/Projects">Projects and Learning</a></li>
      </ul>
    </div>
  </div>
</nav>
<div className="photo">
       <img src={logo}/>
       </div>
       <div className ="name">
         RAHUL MAHESHWARI
       </div>
       <div className="designation">
         UI DEVELOPER | FRONTEND DEVELOPER
       </div>
  

</div>
   
 
);

export default Header;
