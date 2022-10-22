import React from 'react';
import Navbar from '../Navbar';

function Layout ({children}){
    return (
        <div>
            <Navbar/>
            <div style={{marginTop:"20px"}}>
            {children}
            </div>
            
        </div>
    )
}
export default Layout;