import React from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { useEffect } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import { paymentHandler } from '../components/PaymentMethod.js';
function Cart() {
const { products, currency, cartItems ,updateQuantity,getCartAmount,setloginToast,user} = React.useContext(ShopContext);
  const [cartData, setCartData] = React.useState([]);
  console.log()
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })

        }
      }
    }
    setCartData(tempData);
    console.log(tempData, "tempData")
  }, [cartItems]);
  return (
    <div className='border-t pt-14'>
    <div className=' text-2x1 mb-3'>
    <Title text1={'YOUR'} text2={'CART'} />
    </div> I
    <div>
      {
        cartData.map((item,index)=>{
          const productData=products.find((product)=>product._id===item._id);
          return (
            <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center
            gap-4 ">
 <div className='flex items-start gap-6'>
              <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
              <div>
                <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                  <p>{currency}{productData.price}</p>
                  <p className='px-2 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input type='number' 
              onChange={e=>{
              return e.target.value ==='' || e.target.value === '0' ?null:updateQuantity(item._id,item.size,Number(e.target.value))}} className='border max-w-10   overflow-visible sm:min-w-12 px-1 sm:px-2 py-1' min={1} defaultValue={item.quantity} />
              <img className ='w-4 sm:w-5 mr-4 cursor-pointer' onClick={()=>{
                updateQuantity(item._id,item.size,0)
              }
      } src={assets.bin_icon} alt="" />
              </div>
          )
        })
      }
    </div>
    <div className='flex
    justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
        <CartTotal></CartTotal>
      

<div className=' w-full text-end'>
<button onClick ={user?()=>paymentHandler(getCartAmount()):()=>{setloginToast(true)}} className='bg-black text-white cursor-pointer uppercase text-sm my-8 px-8 py-3'>PROCEED TO
process </button></div>

      </div>
    </div>
    </div>
  )
}

export default Cart
