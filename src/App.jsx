import React, { useContext } from 'react'
import Collection from './pages/Collection';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import product from './pages/Product';
import Cart from './pages/Cart';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import './App.css';
import { Router } from 'react-router-dom';

import { ShopContext } from './context/ShopContext';

import Footer from './components/Footer';
function App() {

  const{showSearch,toastItem,setToastItem,closeToastNotification,loginToast,setloginToast} = useContext(ShopContext);
  console.log(toastItem,"toastItemag")
 
  return (
    <div className='px-4 
    sm:px-[16px] 
    md:px-[64px] 
    lg:px-[80px]'>
      {
        loginToast? <div className='fixed top-4 right-4 z-50 flex gap-10 justify-center  items-center w-50 bg-red-600 h-10 rounded-md'>
        Login for payment
        <span className='cursor-pointer' onClick={()=>{setloginToast(false)}}>x</span>
      </div>:<></>
      }
     
       <div className='  fixed top-4 right-4 z-50 '>
        { 
          toastItem.map((id,index)=>{
           
            return ( <div key={index} className={` flex items-center justify-around w-55 h-10 border rounded-md bg-red-700 m-3`}>
            Please Select Item 
        
         <span className='cursor-pointer' onClick={()=>closeToastNotification(id)}>x</span>
        </div>)
          })
        }
        </div>
      <Navbar></Navbar>
 
     
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/product/:productId' element={<Product/>
        }/>
        <Route path='/cart' element={<Cart/>}/>
     
        <Route path='/placeorder' element={<PlaceOrder/>}/>
       
        <Route path='/collection' element={<Collection/>}/>
      </Routes>
    <Footer></Footer>
    </div>
  )
}

export default App

