import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Consulting from '../pages/Consulting';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Marketing from '../pages/Marketing';
import Products from '../pages/Products';
import Services from '../pages/Services';
import SignUp from '../pages/SignUp';
import { ProtectedRoute } from './ProtectedRoute';

function Main(){
    return( 
    <Routes>
  <Route element={<ProtectedRoute/>}>
   <Route path='/'  element={<Home/>} />
   <Route path='/services' element={<Services/>} />
   <Route path='/products' element={<Products/>} />
   <Route path='/contact-us' element={<ContactUs/>} />
   <Route path='/sign-up' element={<SignUp/>} />
   <Route path='/marketing' element={<Marketing/>} />
   <Route path='/consulting' element={<Consulting/>} />
   </Route>
</Routes>
)
}

export default Main;