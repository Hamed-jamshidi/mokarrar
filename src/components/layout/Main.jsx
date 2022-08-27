import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';

import Actions from '../pages/Actions';
import Products from '../pages/Products';
import Signup from '../pages/signup';
import RegisterUser from '../pages/RegisterUser';
import { ProtectedRoute } from './ProtectedRoute';
import Stations from '../pages/Stations';
import Users from '../pages/Users';
import Information from '../pages/Information';
import Controllers from '../pages/Controllers';
import Home from "../pages/Home"

function Main(){
    return( 
    <Routes>
      <Route path='/signin'  element={<Signup/>} />
      
  <Route element={<ProtectedRoute/>}>
   <Route path='/'  element={<Home/>} />
   <Route path='/controllers'  element={<Controllers/>} />
   <Route path='/information' element={<Information/>} />
   <Route path='/products' element={<Products/>} />
   <Route path='/contact-us' element={<ContactUs/>} />
   {/* <Route path='/sign-up' element={<SignUp/>} /> */}
   <Route path='/actions' element={<Actions/>} />
   <Route path='/stations' element={<Stations/>} />
   <Route path='/users' element={<Users/>} />
   <Route path='/products' element={<Products/>} />
   <Route path='/register' element={<RegisterUser/>} />

   </Route>
</Routes>
)
}

export default Main;