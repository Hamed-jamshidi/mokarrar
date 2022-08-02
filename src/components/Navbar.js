import React ,{useState} from 'react';
import {Button } from "./Button"
import  "./Navbar.css"
import {Link} from "react-router-dom"
import {Dropdown} from "./Dropdown"

function Navbar(){
    const [click , setClick] = useState(false);
    const [dropdown , setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false)
    return(
        <>
        <nav className='navbar'>

            <Link to="/" className='navbar-logo'>
                EPIC
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>home</Link>

                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>services
                    <i className='fas fa-caret-down' />
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>home</Link>
                {dropdown && <Dropdown /> }
                </li>

            </ul>
        </nav>
        </>
    )
}
export default Navbar;