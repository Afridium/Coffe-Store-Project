import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../components/Headers';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;