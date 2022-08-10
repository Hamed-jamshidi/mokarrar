import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Actions from '../pages/Actions';
import Products from '../pages/Products';
import Services from '../pages/Information';
import SignUp from '../pages/SignUp';
import { ProtectedRoute } from './ProtectedRoute';
import Stations from '../pages/Stations';
import Users from '../pages/Users';
import Information from '../pages/Information';

function Main(){
    return( 
    <Routes>
  <Route element={<ProtectedRoute/>}>
   <Route path='/'  element={<Home/>} />
   <Route path='/controllers'  element={<Home/>} />
   <Route path='/information' element={<Information/>} />
   <Route path='/products' element={<Products/>} />
   <Route path='/contact-us' element={<ContactUs/>} />
   <Route path='/sign-up' element={<SignUp/>} />
   <Route path='/actions' element={<Actions/>} />
   <Route path='/stations' element={<Stations/>} />
   <Route path='/users' element={<Users/>} />
   <Route path='/products' element={<Products/>} />
   </Route>
</Routes>
)
}

export default Main;