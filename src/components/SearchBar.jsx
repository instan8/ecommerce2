import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

import { assets } from '../assets/frontend_assets/assets';

function SearchBar() {
   const {search,setSearch,
    showSearch,setShowSearch,
   }= useContext(ShopContext);
  return  (
    <div className='border-t border-b
     text-center absolute w-50'>
    <div className='inline-flex items-center justify-center border border-gray-300 rounded-full
    mx-3 py-2 px-5 w-full
    sm:w-full'>
      <input type="text" value={search}
      onChange={(e)=>{
        setSearch(e.target.value)
      } }className="bg-inherit
      flex-1 outline-none 
      text-sm" placeholder='search'/>
      <img className='w-4' src={assets.search_icon}
      alt=""/>
    </div>
  
    </div>
  )
}

export default  SearchBar
