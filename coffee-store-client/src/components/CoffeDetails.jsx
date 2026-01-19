import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeDetails = () => {
    const coffeeDetail = useLoaderData();
    console.log(coffeeDetail);
    return (
        <div className='h-dvh flex items-center'>

            <div className='h-[75%] w-[75%] m-auto flex justify-center items-center bg-[#f5f4f1] rounded-lg'>
                <div className='w-[40%]'>
                <img className='mx-auto w-[75%]' src={coffeeDetail.photo} alt="" />
            </div>
            <div className='font-raleway w-[40%] flex flex-col gap-2 text-[#5C5B5B]'>
                <h3 className='font-rancho text-3xl text-black text-shadow-lg'>{coffeeDetail.name}</h3>
                <p>{coffeeDetail.details}</p>
                <p><span className='font-bold'>Taste: </span>{coffeeDetail.taste}</p>
                <p><span className='font-bold'>Chef: </span>{coffeeDetail.chef}</p>
                <p><span className='font-bold'>Price: </span>{coffeeDetail.price}</p>
            </div>
            </div>
            
        </div>
    );
};

export default CoffeDetails;