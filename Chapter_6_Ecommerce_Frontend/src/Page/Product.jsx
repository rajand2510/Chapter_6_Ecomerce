import { MoveLeft, Shield, Truck } from 'lucide-react';
import React from 'react';

const Product = () => {
  return (
    <div className='pt-20 bg-[#f8f8f7] min-h-screen flex flex-col px-20'>
      <button className='self-start my-5 px-5 text-green-900 '><MoveLeft className='inline-block' />Back to Products</button>

      <div className='flex gap-5'>
        {/* Sticky Left Side (Image) */}
        <div className='w-1/2 sticky top-10 h-fit px-5'>
          <img
            className='rounded-xl w-full'
            src='http://localhost:5000/uploads/1754287481793-74041014-Screenshot 2025-02-02 225327.png'
            alt='Product'
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = 'https://via.placeholder.com/500x500?text=No+Image'; // or your own fake image
            }}
          />

        </div>

        {/* Right Side (Order Summary) */}
        <div className='w-1/2 p-4  h-fit rounded-lg '>
          <h3 className='text-3xl font-bold mb-4'>Office Chair</h3>

          <div className='space-y-2 border-b pb-4 border-gray-200'>
            <h3 className='text-3xl text-green-800 font-bold'>$1299</h3>
            <div className='mt-5'>
              <h3 className='text-lg font-semibold'>Description</h3>
              <p className='text-gray-500'>A stunning wooden coffee table that serves as the perfect centerpiece for your living room. Made from sustainable oak wood with a beautiful natural finish that highlights the wood grain. Features a spacious surface and lower shelf for storage.</p>
            </div>

          </div>

          <div className='space-y-4 mt-4'>
            <div className='flex justify-between text-xl font-bold'>
              <span>Total</span>
              <span>$2373.84</span>
            </div>
            <div className='py-2 space-x-2 '>
              <button className='px-3 py-1 border bg-[#f8f8f7] font-bold border-gray-200 rounded-full'>-</button>
              <span>2</span>
              <button className='px-2.5 py-1 border bg-[#f8f8f7] font-bold border-gray-200 rounded-full'>+</button>

            </div>

            <button className='bg-green-900 text-white w-full py-3 rounded-lg'>
              Add to Cart
            </button>
          </div>
          <div className='flex px-2 py-5 gap-20'>
            <div className='w-1/3 flex gap-2'>
              <Truck />
              <span>Free Shipping</span>
            </div>
            <div className='w-1/3 flex gap-2'>
              <Shield />
              <span>2 Year Warranty</span>
            </div>
            <div className='w-1/3 flex gap-2'>
              <Truck />
              <span>Free Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
