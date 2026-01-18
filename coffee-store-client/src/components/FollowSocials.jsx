import React from 'react';
import cup1 from '../assets/images/cups/Rectangle 9.png' 
import cup2 from '../assets/images/cups/Rectangle 10.png'
import cup3 from '../assets/images/cups/Rectangle 11.png'
import cup4 from '../assets/images/cups/Rectangle 12.png'
import cup5 from '../assets/images/cups/Rectangle 13.png'
import cup6 from '../assets/images/cups/Rectangle 14.png'
import cup7 from '../assets/images/cups/Rectangle 15.png'
import cup8 from '../assets/images/cups/Rectangle 16.png'
const FollowSocials = () => {
    return (
        <div className='my-18'>
            <div className='text-center mb-12'>
                <p className='font-raleway my-4'>Follow Us Now</p>
                <h3 className='font-rancho text-5xl text-shadow-lg'>Follow on Instagram</h3>
            </div>
            <div className='grid grid-cols-4 gap-4.5 justify-center items-center w-[70%] mx-auto'>
                <div><img src={cup1}alt="" /></div>
                <div><img src={cup2} alt="" /></div>
                <div><img src={cup3} alt="" /></div>
                <div><img src={cup4} alt="" /></div>
                <div><img src={cup5} alt="" /></div>
                <div><img src={cup6} alt="" /></div>
                <div><img src={cup7} alt="" /></div>
                <div><img src={cup8} alt="" /></div>
            </div>
        </div>
    );
};

export default FollowSocials;