import React, { useState } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  const [login ,setLogin] = useState(false);
  const token = localStorage.getItem("token")
  const handleClickSigin = ()=>{
    if(token) localStorage.removeItem("token");}
 
  return (
    <Link to='/'>
      <button onClick={handleClickSigin} className='btn'>{ token? "خروج" : "ورود"} </button>
    </Link>
  );
}
