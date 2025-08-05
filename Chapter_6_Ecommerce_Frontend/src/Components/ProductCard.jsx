import React from 'react'

const ProductCard = () => {
    return (
        <div className='border  hover:shadow-lg bg-white border-gray-200 rounded-lg'>

            <div className='overflow-hidden rounded-t-lg'>
                <img
                    className=" rounded-t-lg transition-transform w-full duration-300  hover:scale-110"
                    src="http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png"
                    alt=""
                /> 
                </div> 
                <div className='px-4 pb-4'>
                    <h3 className='text-gray-600 font-semibold truncate'>Offcie Chair lore</h3>
                    <h3 className='text-green-900 text-lg font-bold '>$799</h3>
                    <button className='bg-green-900 text-sm font-semibold text-white py-2  rounded-lg  w-full'>
                        Add to Cart
                    </button>
                </div>
            </div>
            )
}

            export default ProductCard