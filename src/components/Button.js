import React, { useState } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  const [login ,setLogin] = useState(false);
  return (
    <Link to='sign-up'>
      <button className='btn'>{login ? "خروج" : "ورود"} </button>
    </Link>
  );
}
