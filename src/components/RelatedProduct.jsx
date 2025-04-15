import React, { useEffect,useState,useContext } from 'react'
import { ShopContext } from '../context/ShopContext';    
import Title from './Title';
import ProductItem from './ProductItem';
function RelatedProduct({category,subCategory}) {
    const {products}= useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        if(products.length>0){
            let productsCopy=products.slice();
            console.log(productsCopy,"productsCopy walla")
            productsCopy =
            productsCopy.filter((item)=>{
               console.log(category,item.category)
               return category === item.category

            });
            productsCopy = productsCopy.filter((item)=>{
                console.log(subCategory,item.subCategory)
                return subCategory === item.subCategory
            })
            console.log(productsCopy,"productsCopy")
            setRelatedProducts(productsCopy.slice(0,5)  )
            

        }
    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1="Related" text2="Products"/>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            
      {relatedProducts.map((item,index)=>{return <ProductItem key={index} id={item._id} 
      name={item.name} price={item.price} image={item.image} />})}
      </div>
    </div>
  )
}

export default RelatedProduct
