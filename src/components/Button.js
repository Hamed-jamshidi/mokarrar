import React, { useState } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  const [login ,setLogin] = useState(false);
  const token = localStorage.getItem("token")
  const handleClickSigin = ()=>{
    if(token) {
      localStorage.removeItem("token");}}
      // window.location.reload()
  return (
    <Link to='/signin'>
      <button onClick={handleClickSigin} className='btn'>{ token? "خروج" : "ورود"} </button>
    </Link>
  );
}
