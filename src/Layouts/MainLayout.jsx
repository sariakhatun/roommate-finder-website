import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <div className='flex flex-col min-h-screen '>
           <Navbar></Navbar>
            <main className='flex grow w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
        </div>
        
        </div>
        

    );
};

export default MainLayout;