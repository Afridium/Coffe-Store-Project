import React from 'react';
import coffeelogo from '../assets/images/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:justify-center gap-7 footer-bg px-3.5 py-9'>
            <div className='lg:w-[30%]'>
                <img className='w-10 mb-2' src={coffeelogo} alt="" />
                <h3 className='font-rancho mb-5 outline-amber-200 text-5xl text-shadow-lg'>Coffee Concord</h3>
                <p className='font-raleway text-xs mb-4 w-[75%]'>
                    Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                </p>
                <div className='flex gap-1.5 items-center mb-6'>
                    <FaFacebook size={25} />
                    <FaTwitter size={25}/>
                    <AiFillInstagram size={25}/>
                </div>

                <h3 className='font-rancho text-4xl mb-2.5 text-shadow-lg'>
                    Get in touch
                </h3>
                <p className='flex items-center gap-1.5 font-raleway'><FaPhoneAlt /> +8801234567890</p>
                <p className='flex items-center gap-1.5 font-raleway'><IoMail /> coffee@concord.com</p>
                <p className='flex items-center gap-1.5 font-raleway'><FaLocationDot /> Chudling Street, Noth Badda, Noyakhali</p>
            </div>
            <div className='lg:w-[30%]'>
                <h3 className='font-rancho text-4xl my-4 text-shadow-lg'>Connect With Us</h3>
                <form className='w-full' action="">
                    <input className='bg-white my-2.5 w-full pl-1 py-1' type="text" placeholder='Name' name="name" id="" /> 
                    <br />
                    <input className='bg-white my-2.5 w-full pl-1 py-1' type="email" placeholder='Email' name="email" id="" />
                    <br />
                    <textarea className='bg-white my-2.5  pl-1 w-full h-32' name="message" placeholder='Write your message here' id=""></textarea>
                    <br />
                    <input className='btn rounded-3xl border-2 border-black bg-transparent font-rancho text-xl' type="submit" value="Send Message" />
                </form>
            </div>
        </div>
        <div className='cp-bg py-2'>
            <p className='font-rancho text-white text-center'>Copyright Espresso Emporium ! All Rights Reserved</p>
        </div>
        </div>
        
    );
};

export default Footer;