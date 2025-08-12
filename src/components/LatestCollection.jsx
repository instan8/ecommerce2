import React, { useContext,forwardRef } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import{ useEffect } from 'react';
import ProductItem from './ProductItem';
const LatestCollection =forwardRef(function LatestCollection(props,ref) {
    const { products } = useContext(ShopContext);
    console.log(products,"products")
    const [latestProducts, setLatestProducts] = React.useState([]);
    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [])
    return (
        <div className='my-10' ref={ref}>
            <div className='text-center py-8
        text-3xl'>
                <Title text1="Latest" text2="Collection">

                </Title>
                <p className='w-3/4 m-auto text-xs sm:text-sm
 md:text-base
 text-gray-600'>
                    lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>

            </div>

{/* Rendering Products */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
    {latestProducts.map((item,index)=>(
        <ProductItem key={index} id={item._id}
        image={item.image} 
        name={item.name}
        price={item.price} />
    ))}
    </div>
    </div>
    )
})

export default LatestCollection
