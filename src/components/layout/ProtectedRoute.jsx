import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Layout from './Layout';

export const ProtectedRoute = () =>{
    const token = localStorage.getItem("token");
    if(!token){
        // return <Layout><Outlet/></Layout>
        return <Navigate to="/signin" replace />
        }
    return <Layout><Outlet/></Layout>
}