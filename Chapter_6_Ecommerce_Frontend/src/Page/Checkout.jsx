import { Trash } from 'lucide-react'
import React from 'react'

const Checkout = () => {
    return (
        <div className='pt-20 bg-[#f8f8f7] h-full flex flex-col px-44 '>
            <h3 className='text-3xl font-bold my-2'>
                Checkout
            </h3>
            <div className='flex flex-row gap-5'>
                <div className='w-1/2'>
                    <div className=' mb-5 border p-4 border-gray-200 h-fit rounded-lg bg-white'>
                        <h3 className='text-2xl font-semibold mb-2 '>
                            Your Items
                        </h3>
                        <div className='flex flex-row gap-2 justify-between mb-4 bg-white p-2 rounded-lg border border-gray-200'>
                            <div className=" flex flex-row items-center  gap-2 font-semibold text-sm ">
                                <img className='w-12 h-12' src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png" alt="" />
                                <h3>Office Chair</h3>
                            </div>

                            <div className='py-2 space-x-2 '>
                                <button className='px-3 py-1 border bg-[#f8f8f7] font-bold border-gray-200 rounded-full'>-</button>
                                <span>2</span>
                                <button className='px-2.5 py-1 border bg-[#f8f8f7] font-bold border-gray-200 rounded-full'>+</button>
                                <button className='rounded-lg  px-2.5 '><Trash size={18} color="red" /></button>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 justify-between bg-white p-2 rounded-lg border border-gray-200'>
                            <div className=" flex flex-row items-center  gap-2 font-semibold text-sm ">
                                <img className='w-12 h-12' src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png" alt="" />
                                <h3>Office Chair</h3>

                            </div>

                            <div className='py-2 space-x-2 '>
                                <button className='px-3 py-1 border bg-[#f8f8f7] font-bold border-gray-200 rounded-full'>-</button>
                                <span>2</span>
                                <button className='px-2.5 py-1 border bg-[#f8f8f7] font-bold border-gray-200 rounded-full'>+</button>
                                <button className='rounded-lg  px-2.5 '><Trash size={18} color="red" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 flex items-center justify-center ">


                        <div className="bg-white p-8 rounded-lg border  border-gray-200   max-w-2xl">

                            {/* Header Section */}
                            <div className="flex items-center gap-4 mb-6">
                                <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                <h3 className='text-2xl font-semibold mb-2 '>
                                    Shipping & Payment
                                </h3>
                            </div>

                            {/* Form Element */}
                            <form action="#" method="POST" className="space-y-6">

                                {/* Full Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="full-name"
                                            name="full-name"
                                            className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-green-900 "
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-green-900 "
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-green-900 "
                                    />
                                </div>

                                {/* City & ZIP Code */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-green-900 "
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700 mb-1">
                                            ZIP Code
                                        </label>
                                        <input
                                            type="text"
                                            id="zip-code"
                                            name="zip-code"
                                            className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-green-900 "
                                        />
                                    </div>
                                </div>

                                {/* Card Details */}
                                <div className="grid grid-cols-12 gap-y-4 gap-x-6">
                                    <div className="col-span-12 md:col-span-7">
                                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            id="card-number"
                                            name="card-number"
                                            placeholder="1234 5678 9012 3456"
                                            className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-green-900 "
                                        />
                                    </div>
                                    <div className="col-span-8 sm:col-span-6 md:col-span-3">
                                        <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700 mb-1">
                                            Expiry Date
                                        </label>
                                        <input
                                            type="text"
                                            id="expiry-date"
                                            name="expiry-date"
                                            placeholder="MM/YY"
                                            className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-green-900 "
                                        />
                                    </div>
                                    <div className="col-span-4 sm:col-span-6 md:col-span-2">
                                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            placeholder="123"
                                            className="block w-full p-2 border border-gray-300 rounded-md  focus:outline-green-900 "
                                        />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 border p-4 border-gray-200 h-fit rounded-lg bg-white'>
                    <h3 className='text-2xl font-semibold mb-2 '>
                        Order Summary
                    </h3>
                    <div className='p-2  border-b space-y-2  border-gray-200'>
                        <div className='flex flex-row gap-2 justify-between bg-white '>
                            <h3 className=" flex flex-row items-center  gap-2  ">Subtotal</h3>
                            <h3 className=" flex flex-row items-center  gap-2  ">$1522</h3>
                        </div>
                        <div className='flex flex-row gap-2 justify-between bg-white '>
                            <h3 className=" flex flex-row items-center  gap-2  ">Shipping</h3>
                            <h3 className=" flex flex-row items-center  gap-2  ">Free</h3>
                        </div>
                        <div className='flex flex-row gap-2 justify-between bg-white '>
                            <h3 className=" flex flex-row items-center  gap-2  ">Tax</h3>
                            <h3 className=" flex flex-row items-center  gap-2  ">$178</h3>
                        </div>
                    </div>
                     <div className='p-2  space-y-2'>
                        <div className='flex flex-row gap-2 justify-between bg-white  text-xl font-bold'>
                            <h3 className=" flex flex-row items-center  gap-2  ">Total</h3>
                            <h3 className=" flex flex-row items-center  gap-2  ">$2373.84</h3>
                        </div>
                        <div className='flex flex-row gap-2 justify-between bg-white '>
                            <h3 className=" flex flex-row items-center  gap-2  text-green-600">🎉 Free shipping on orders over $1000!</h3>
                     
                        </div>
                        <div className='flex flex-row gap-2 justify-between bg-white '>
                            <button className='bg-green-900 text-white w-full py-3 rounded-lg' >Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout