import React from 'react'

function Footer() {
  return (
    <div className="wrapper">
      <div className="sm:grid grid-cols-[3fr_1fr_1fr] gap-14 flex flex-col py-10 border-y-2 border-gray-300">
        <div className='column-first '>
            <p className='text-2xl mb-4'>Shopifly</p>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit.</p>
            </div>
        </div>
        <div className="coloumn-sec">
        <p className='text-2xl mb-4'>Company</p>
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy Policy</p>
        </div>
        <div className='third-col'>
        <p className='text-2xl mb-4'>Get in Touch</p>
            <p>+91 1234567890</p>
            <p>adityakrishna585@gmail.com</p>
        </div>
      </div>
      <div className='flex justify-center items-center py-6'>Copyright 2024@ Aditya Krishna - All Right Reserved.</div>
    </div>
  )
}

export default Footer
