import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { signInWithPopup,signOut} from "firebase/auth";
import {auth,googleProvider} from './firebase'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
 const[dropDown,setDropDown] = useState(false)
  const{showSearch,setShowSearch,getCartCount,user,setUser} = useContext(ShopContext);
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("User signed in:", result.user.displayName);
     setUser(result.user.displayName) 
        
        
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        setUser(null);
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

 
const dropdownToggle =()=>{
  setDropDown(prev=>!prev)
}

  const [visible,setVisible] = React.useState(false)
  return (
    <div className='flex item-center Navbar
    justify-between font-bold bg-gray-300 w-full  py-2 items-center'>
      <Link to={"/"}>  
        <div className='text-4xl'>
          shopyfly
        </div> </Link>
      <ul className='hidden sm:flex
      gap-5 text-sm 
      text-grey-700 right-navbar-part'>
        <NavLink to='/' className ='text-white text-grey-700'>
        <p>home</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/collection' className ='text-white text-grey-700'>
        <p>collection</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/about' className ='text-white text-grey-700'>
        <p>about</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        
        
      </ul>

      <div className='flex item-center gap-6 z-10 '>
        
        <div className="relative cursor-pointer group inline-block" onClick={dropdownToggle}>
  {/* Profile Image */}
   <AccountCircleIcon className="medium"></AccountCircleIcon>
   {
    user? <div className='font-bold'> {user.slice(0,3)}</div>:<div></div>
   }
  

  {/* Dropdown */}
  <div className={`absolute right-0 mt-2 w-30 bg-gray-300 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-all z-10 ${dropDown? "opacity-100 visible":""} `}>
    <ul className="py-2">
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={e=>handleLogin()}>Login</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={e=>handleLogout()}>Logout</li>
    </ul>
  </div>
</div>
        
        <Link to='/cart' className="relative cursor-pointer z-50 pointer-events-auto ">
       <LocalMallIcon  className="medium cursor-pointer" ></LocalMallIcon>
        <p className='absolute right-[-4px] top-[15px] w-4 text-center  bg-black
        text-white rounded-full
        aspect-square
        text-[8px]'>{getCartCount()}</p>
        </Link>     
        <div className='w-5 cursor-pointer sm:hidden'  onClick={()=>setVisible(true)}>  
        <MenuIcon></MenuIcon>
        </div>

         </div>
{/* sidebar menu for ssmall screen */}
         <div className={`absolute z-50 top-0 right-0
         bottom-0
         overflow-hidden
         bg-white transition-all duration-300
         ${visible ?'w-full':'w-0'}`}>
<div className='flex flex-col text-gray-600'>
<div 
onClick={()=>setVisible(false)} className='flex
items-center
gap-4 p-3
cursor-pointer'><img className='h-4 rotate-180' src={assets.dropdown_icon}></img>
<p>back</p>
</div>

<NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border'  to='/'>home</NavLink>
<NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/collection'>collection</NavLink>
<NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to ='/about'>about</NavLink>
<NavLink onClick={()=>{setVisible(false)}} className='py-2 pl-6 border' to='/contact'>contact</NavLink>
          </div>
         </div>
    </div>
  )
}

export default Navbar
