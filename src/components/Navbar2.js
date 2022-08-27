import { Link } from "react-router-dom";
import React from "react";
import "./Navbar2.css"
const Navbar = () => {
    return ( 

        <div class="navbar">
 
 {/* Navbar logo */}
        <div class="navHeader">
          <div class="navLogo">
            <Link to="/"><img src="logo.png" width="100px" alt="logo"/></Link>
              
           
          </div>
        </div>
     
       {/* responsive navbar toggle button  */}
        <input type="checkbox" id="navCheck"/>
        <div class="navBtn">
          <label for="navCheck">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
     
         {/* Navbar items  */}
        <div class="navLinks">
          <Link to="/">Home</Link>
          <Link to="/">Aboat</Link>
          
     
           {/* Dropdown menu  */}
          <div class="dropdown">
            <Link to="/">Services
              <i class="fas fa-angle-down"></i>
          </Link>
            <div class="dropContent">
             <Link to="/">drop1</Link>
             <Link to="/">drop1</Link>
             <Link to="/">drop1</Link>
             
     
               {/* Creating sub menu Dropdown  */}
              <div class="dropdown2">
                <Link class="dropBtn2" to="/">More
                  <i class="fas fa-angle-right"></i>
                </Link>
                <div class="dropContent2">
                <Link to="/">drop2</Link>
                <Link to="/">drop2</Link>
                <Link to="/">drop2</Link>
                 
                </div>
              </div>
            </div>
          </div>
     
          <Link to="/">blogs</Link>
          <Link to="/">Contant</Link>
         
          <button class="loginBtn">Login</button>
        </div>
     
      </div>


     );
}
 
export default Navbar;

 

