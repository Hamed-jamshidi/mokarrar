import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {FaMicroscope} from "react-icons/fa"
import { useProduct, useProductActions } from './context/ProductProvider';
import { constants } from '../constants';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const productDispatcher = useProductActions()
  const productData = useProduct();
  console.log("navbar product data:", productData)
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = (newType) => {
    setClick(false);
    if(newType ==="new"){
      productDispatcher({type:"RESET_STATE"});
      localStorage.removeItem("link");
    } 
  };

  const onMouseEnter = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false);
    // } else {
    //   setDropdown(true);
    // }
    setDropdown(true);
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const token = localStorage.getItem("token")
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          مکرر <FaMicroscope/>
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>         
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              تعریف سیستم 
              <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link to='/information' className='nav-links' onClick={()=>closeMobileMenu("new")}>
            ثبت اطلاعات
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             ابزار
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
کاربران     
     </Link>
          </li>

                    <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
            { token? "خروج" : "ورود"}
            </Link>
          </li>
        </ul>
        <Button />
        <div>
         <div style={{display:"flex"}}>
         <span>نوع ورود کاربر :</span>
          <span style={{color:"white" , marginRight:"3px"}}>{constants.userType[2]}</span>
          </div> 
         <div style={{display:"flex"}}>
         <span >واحد کاری:</span>
          <span  style={{color:"white" , marginRight:"3px"}}>{constants.partitionName[2]}</span>
          </div> 
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
