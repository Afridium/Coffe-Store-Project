import React from 'react';
import aroma from '../assets/images/icons/1.png';
import hq from '../assets/images/icons/2.png';
import pg from '../assets/images/icons/3.png';
import pr from '../assets/images/icons/4.png';
const Home = () => {
    return (
        <div>
            <div className='home-bg w-full h-[calc(100vh-4.5rem)] flex flex-col justify-center items-center lg:items-end'>
                <div className=' text-white lg:w-[45%] w-[75%] lg:text-left text-center lg:mr-30'>
                    <h1 className='font-rancho text-5xl my-3 lg:text-left'>Would you like a cup of Delicious Coffee?</h1>
                    <p className='font-raleway text-xs my-3 leading-6 lg:text-left text-center'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn bg-[#d2b48c] font-rancho text-lg shadow hover:bg-transparent hover:text-white'>Learn More</button>
                </div>
            </div>
            <div className='grid grid-cols-4 py-10.5 px-15 gap-8.5 lg:gap-28 lg:px-44 w-full bg-[#eceae3] items-center'>
                <div className='col-span-2 lg:col-span-1'>
                    <img className='w-12' src={aroma} alt="" />
                    <h3 className='font-rancho text-xl my-1'>Awesome Aroma</h3>
                    <p className='font-raleway text-xs'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <img className='w-12' src={hq} alt="" />
                    <h3 className='font-rancho text-xl my-1'>High Quality</h3>
                    <p className='font-raleway text-xs'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div  className='col-span-2 lg:col-span-1'>
                    <img className='w-12' src={pg} alt="" />
                    <h3 className='font-rancho text-xl my-1'>Pure Grade</h3>
                    <p className='font-raleway text-xs'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div  className='col-span-2 lg:col-span-1'>
                    <img className='w-12' src={pr} alt="" />
                    <h3 className='font-rancho text-xl my-1'>Proper Roasting</h3>
                    <p className='font-raleway text-xs'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>

    );
};

export default Home;