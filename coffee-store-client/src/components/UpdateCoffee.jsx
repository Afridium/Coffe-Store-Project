import React from 'react';
import { useLoaderData } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    console.log(coffee);
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const fromDetail = new FormData(form);
        const updatedCoffee = Object.fromEntries(fromDetail.entries());
        console.log(updatedCoffee);
    }
    return (
       <div className='w-screen h-[calc(100vh-6rem)] flex items-center flex-col my-11'>
                   <div className='self-start ml-10 mt-8'>
                       <button className='font-rancho btn hover:bg-[#d2b48c]'><FaArrowLeft />Back To Home</button>
                   </div>
                   <div className='lg:w-[50%] bg-[#f4f3f0] rounded-[5px] py-4 px-7 lg:px-16 text-center m-auto'>
                       <h1 className='font-rancho font-extrabold text-3xl my-5'>Update Coffee</h1>
                       <p className='font-raleway opacity-90 text-xs my-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                       <form className='py-5' onSubmit={handleAddCoffee}>
                           <div className='grid grid-cols-4 gap-2.5'>
                               <input defaultValue={coffee.name} type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="name" placeholder='Coffee Name' id="" />
                               <input defaultValue={coffee.chef} type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="chef" placeholder='Chef' id="" />
                               <input defaultValue={coffee.price} type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="price" placeholder='Price' id="" />
                               <input defaultValue={coffee.taste} type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="taste" placeholder='Taste' id="" />
                               <input defaultValue={coffee.category} type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="category" placeholder='Category' id="" />
                               <input defaultValue={coffee.details} type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="details" placeholder='Details' id="" />
                               <input defaultValue={coffee.photo} type="text" className='col-span-4 rounded-[5px] bg-white px-2 py-1' name="photo" placeholder='Photo Link' id="" /> <br />
                           </div>
                           <input type="submit" className='font-rancho px-3.5 py-1.5 rounded-[5px] bg-[#d2b48c] border-2 border-transparent w-full hover:border-[#000000]' value="Update Coffee" />
                       </form>
                   </div>
               </div>
    );
};

export default UpdateCoffee;