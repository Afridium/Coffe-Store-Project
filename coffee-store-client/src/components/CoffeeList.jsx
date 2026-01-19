import React from 'react';
import { FaEye } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { Link } from 'react-router';
const CoffeeList = ({ coffeeList }) => {

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE"
                }).then(res => res.json()).then(data => {

                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })




            }
        });
    }

    return (
        <div className='grid grid-cols-2 w-[75%] mx-auto my-18 px-6 gap-4'>
            {
                coffeeList.map(coffee => <div className=' p-6 col-span-2 flex-col lg:flex-row lg:col-span-1 flex justify-center gap-2.5 items-center bg-[#f5f4f1] rounded-lg' key={coffee._id}>
                    <div className='mx-auto'>
                        <img className='w-24' src={coffee.photo} alt="" />
                    </div>
                    <div className='font-raleway lg:w-[50%] text-[#5C5B5B] mx-auto'>
                        <p><span className='font-bold'>Name: </span>{coffee.name}</p>
                        <p><span className='font-bold'>Chef: </span>{coffee.chef}</p>
                        <p><span className='font-bold'>Price: </span>{coffee.price}</p>
                    </div>
                    <div className='flex lg:flex-col gap-2 mx-auto'>
                        <Link to={`coffeeDetails/${coffee._id}`}><FaEye size={20} /></Link>
                        
                        <Link to={`/updateCoffee/${coffee._id}`}><BsPencilSquare size={20} /></Link>
                        

                        <div onClick={() => handleDelete(coffee._id)}><MdDelete size={20} /></div>


                    </div>
                </div>)
            }
        </div>
    );
};

export default CoffeeList;