import React from 'react';
import logo from '../assets/images/more/logo1.png';


const Headers = () => {
    return (
        <div className='navbar-bg py-2 flex justify-center items-center w-full'>
            <img src={logo} className='w-10' alt="" />
            <h1 className='font-rancho text-white text-3xl text-center'>Coffee Concord</h1>
        </div>
    );
};

export default Headers;