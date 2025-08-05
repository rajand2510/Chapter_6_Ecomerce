import { Package } from 'lucide-react';
import React from 'react'

const Profile = () => {
    const name = "Rajan Dalvadi";
    const initials = name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase(); // => "RD"
    return (
        <div className='bg-[#f8f8f7] flex flex-col gap-5 h-full items-center   pt-20 '>
            <div className='border lg:w-[60%] h-fit md:w-[90%] sm:-[90%] border-gray-200 rounded-lg bg-white p-5'>
                <div className='flex flex-row justify-between'>
                    <h3 className='text-lg font-semibold'>Profile Info</h3>
                    <button className='py-2 px-4 bg-red-600 rounded-lg text-white'>Log out</button>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-900 text-white text-sm font-semibold">
                        {initials}
                    </div>
                    <div>
                        <h3>Rajan Dalvadi</h3>
                        <h4 className='text-gray-500'>rajand2510@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div className='lg:w-[60%] h-fit md:w-[90%] '>
                <h3 className='flex flex-row gap-2 items-center'>
                    <Package size={30} />
                    <span className='text-2xl font-bold'>Your Orders</span>
                </h3>
            </div>

            <div className='border lg:w-[60%] h-fit md:w-[90%] space-y-2 border-gray-200 rounded-lg bg-white p-5'>
                <div className='flex flex-row justify-between'>
                    <h3 className='text-lg '>Order ID : 68904db8536cd04998ed9996</h3>
                    <span className='py-1 px-2 bg-yellow-500 rounded-3xl text-sm font-semibold text-white'>Processing</span>
                </div>
                <div className='flex flex-row justify-between'>
                    <h3 className='text-sm text-gray-400 font-semibold '>Placed on 15/1/2024</h3>
                    <span className='py-1 px-2 text-green-800 rounded-3xl text-lg font-bold '>$1299</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className="w-12 h-12 flex items-center justify-center  bg-green-900 text-white text-sm font-semibold">
                       <img src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png" alt="" />
                    </div>
                    <div>
                        <h3>Office Chair</h3>
                        
                    </div>
                </div>
                    <div className='flex flex-row gap-2'>
                    <div className="w-12 h-12 flex items-center justify-center  bg-green-900 text-white text-sm font-semibold">
                       <img src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png" alt="" />
                    </div>
                    <div>
                        <h3>Office Chair</h3>
                        
                    </div>
                </div>    <div className='flex flex-row gap-2'>
                    <div className="w-12 h-12 flex items-center justify-center  bg-green-900 text-white text-sm font-semibold">
                       <img src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png" alt="" />
                    </div>
                    <div>
                        <h3>Office Chair</h3>
                        
                    </div>
                </div>
            </div>
               <div className='border lg:w-[60%] h-fit md:w-[90%] space-y-2 border-gray-200 rounded-lg bg-white p-5'>
                <div className='flex flex-row justify-between'>
                    <h3 className='text-lg '>Order ID : 68904db8536cd04998ed9996</h3>
                    <span className='py-1 px-2 bg-yellow-500 rounded-3xl text-sm font-semibold text-white'>Processing</span>
                </div>
                <div className='flex flex-row justify-between'>
                    <h3 className='text-sm text-gray-400 font-semibold '>Placed on 15/1/2024</h3>
                    <span className='py-1 px-2 text-green-800 rounded-3xl text-lg font-bold '>$1299</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className="w-12 h-12 flex items-center justify-center  bg-green-900 text-white text-sm font-semibold">
                       <img src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png" alt="" />
                    </div>
                    <div>
                        <h3>Office Chair</h3>
                        
                    </div>
                </div>
                    <div className='flex flex-row gap-2'>
                    <div className="w-12 h-12 flex items-center justify-center  bg-green-900 text-white text-sm font-semibold">
                       <img src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png" alt="" />
                    </div>
                    <div>
                        <h3>Office Chair</h3>
                        
                    </div>
                </div>    <div className='flex flex-row gap-2'>
                    <div className="w-12 h-12 flex items-center justify-center  bg-green-900 text-white text-sm font-semibold">
                       <img src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png" alt="" />
                    </div>
                    <div>
                        <h3>Office Chair</h3>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile