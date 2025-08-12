import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './title';
import ProductItem from './ProductItem';
function BestSeller() {
const {products,}=useContext(ShopContext);
const [bestseller,setBestSeller]=useState([]);
useEffect(()=>{
    const bestProduct = products.filter((item)=>item.bestseller);
    setBestSeller(bestProduct.slice(0,5));
},[])
  return (
    <div className='my-10'>
        <div className='text-center
        text-3xl py-8'>
            <Title text1="best" text2="sellers"/>
            <p className='w-3/4 m-auto text-xs sm:text-sm
            md:text-base text-gray-600'>
                lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
                </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
        {bestseller.map((item,index)=>(
            <ProductItem key={index} id={item._id}
            image={item.image} price={item.price}
            name={item.name}></ProductItem>
        ))}
        </div>
    </div>
  )
}

export default BestSeller
