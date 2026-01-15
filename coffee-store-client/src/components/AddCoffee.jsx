import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value[0];

        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);
    }
    return (
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center flex-col'>
            <div className='self-start ml-10 mt-8'>
                <button className='font-rancho btn hover:bg-[#d2b48c]'><FaArrowLeft />
Back To Home</button>
            </div>
            <div className='w-[50%] bg-[#f4f3f0] rounded-[5px] py-4 px-7 lg:px-16 text-center m-auto'>
                <h1 className='font-rancho font-extrabold text-3xl my-5'>Add a Coffee</h1>
                <p className='font-raleway opacity-90 text-xs my-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form className='py-5' onSubmit={handleAddCoffee}>
                    <div className='grid grid-cols-4 gap-2.5'>
                        <input type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="name" placeholder='Coffee Name' id="" />
                        <input type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="chef" placeholder='Chef' id="" />
                        <input type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="supplier" placeholder='Supplier' id="" />
                        <input type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="taste" placeholder='Taste' id="" />
                        <input type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="category" placeholder='Category' id="" />
                        <input type="text" className='col-span-4 md:col-span-2 rounded-[5px] bg-white px-2 py-1' name="details" placeholder='Details' id="" />
                        <input type="file" className='col-span-4 rounded-[5px] bg-white px-2 py-1' name="photo" id="" /> <br />
                    </div>
                    <input type="submit" className='font-rancho px-3.5 py-1.5 rounded-[5px] bg-[#d2b48c] border-2 border-transparent w-full hover:border-[#000000]' value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;