import { ShoppingBasket, ShoppingCart, User2 } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const Navbar = () => {
    const navigate =useNavigate();
      const location = useLocation();
  const isHome = location.pathname === '/';
    return (
        <div className='flex flex-row fixed w-full top-0 z-10 bg-white  justify-between py-3 px-25 border  border-gray-200 '>
            <h1 onClick={()=>{navigate('/')}} className='text-green-900 text-3xl font-bold cursor-context-menu'>HomeDecor</h1>
            <div className='flex flex-row gap-10 '>
                {isHome && (
                <input className='w-96 bg-[#f8f8f7] border border-gray-200 rounded-lg focus:outline-green-800 px-4' placeholder='Search here' type="text" />
                 )}
                <div className='grid grid-cols-2 gap-2 py-1'>

                    <button onClick={()=>{navigate('/Profile')}} className='text-green-900 font-semibold gap-2  text-sm cursor-pointer py-2 px-4 rounded-lg hover:bg-green-900/20 flex flex-row'>
                        <User2 size={20} />
                        Profile
                    </button>
                    <button onClick={()=>{navigate('/Cart')}} className='text-green-900 font-semibold gap-2 text-sm cursor-pointer py-2 px-4 rounded-lg hover:bg-green-900/20 flex flex-row'>
                        <ShoppingCart size={20} />
                        Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar