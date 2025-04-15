import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import RelatedProduct from '../components/RelatedProduct';
const Product = () => {
  const { productId } = useParams();
  const [size, setSize] = useState("");
  const { products, currency,addToCart,setToastItem ,closeToastNotification} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");


  const fetchProductData = async () => {
    products.map(item => {
      if (item._id === productId) {
        setProductData(item);
       
        setImage(item.image[0]);
        console.log(item, "item");
        return null;
      }
    })

  };
 
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className='border-t-2
    pt-10 transition-opacity
    ease-in duration-500 
    opacity-100 w-full relative '>
    
      
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col
      sm:flex-row w-full relative'>
       
          
        {/* product images */}
        <div className="flex-1
      flex
      flex-col-reverse
      gap-3
      sm:flex-row w-full sm:w-[50%]">
       
          <div className="flex sm:flex-col overflow-x-auto
        sm:overflow-y-scroll
        justify-between
        sm:justify-normal max-h-screen w-full sm:w-[30%]">
            {
              productData.image.map((item, index) => (
                <img onClick={() => {
                  setImage(item)
                }} src={item} alt="" key={index} className='
    w-[24%] sm:w-full
    sm:mb:3
    flex-shrink-0
    cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[60%]'>
            <img src={image} alt="" className='w-full h-auto'></img>
          </div>
        </div>
        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'> {productData.name}</h1>
          <div className='flex item-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
          </div>
          <p>{currency}{productData.price}</p>
          <p className="mt-5 text-grtay-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col
gap-4 my-8
">
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => {
                console.log(item, "item");
                return <button onClick={() => { setSize(item) }} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-400' : ""}`} key={index}>{item}</button>
              })}
            </div>
          </div>
          <button className='bg-black text-white px-8
py-3
text-sm 
active:bg-gray-700 ' onClick={() =>{
  if(size===""){
    let id=  new Date().getTime();
    setToastItem((prev)=>[...prev,id])
    setTimeout(() => {
      closeToastNotification(id)
    }, 3000);
  }
  else{
  addToCart(productData._id,size);}
}}>AddTo Cart</button>
          <hr className='mt-8 sm:w-4/5'></hr>
          <div className='text-sm
       text-gray-500
           mt-5
         flex flex-col
         gap-1'>

            <p>100%original</p>
            <p>cash on deliver is available</p>
            <p>Easy return and exchange policy within 7 days.</p>

          </div>
        </div>
      </div>
      {/* lower section */}
      <div className='mt-20'>  
<div className='flex gap-1 flex-col sm:flex-row '> 
  <div className='border border-gray-700 '>Description</div>
  <div className='border border-gray-400'>Reviews(122)</div>
</div>
<div className='mt-1 border border-gray-400 flex flex-col
 justify-center
items-center px-6 py-6 text-sm
gap-4'>
  <p> An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
<p>     
E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information. </p></div>
</div>
<RelatedProduct category={productData.category} subCategory={productData.subCategory}></RelatedProduct>
    </div>

  ) : <div></div>
}

export default Product
