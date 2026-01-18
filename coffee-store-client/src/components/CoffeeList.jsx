import React from 'react';
import { FaEye } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
const CoffeeList = ({coffeeList}) => {

    return (
        <div className='grid grid-cols-2 w-[75%] mx-auto my-18 px-6 gap-4'>
            {
                coffeeList.map(coffee => <div className=' p-6 flex justify-center gap-2.5 items-center bg-[#f5f4f1] rounded-lg' key={coffee._id}>
                    <div className='mx-auto'>
                        <img className='w-24' src={coffee.photo} alt="" />
                    </div>
                    <div className='font-raleway w-[50%] text-[#5C5B5B] mx-auto'>
                        <p><span className='font-bold'>Name: </span>{coffee.name}</p>
                        <p><span className='font-bold'>Chef: </span>{coffee.chef}</p>
                        <p><span className='font-bold'>Price: </span>{coffee.price}</p>    
                    </div>
                    <div className='flex flex-col gap-2 mx-auto'>
                        <FaEye size={20} />
                        <BsPencilSquare size={20}/>
                        <MdDelete size={20}/>

                    </div>
                </div>)
            }
        </div>
    );
};

export default CoffeeList;