import React from 'react'

function Footer() {
  return (
    <div className="wrapper">
      <div className="sm:grid grid-cols-[3fr_1fr_1fr] gap-14 flex flex-col py-10 border-y-2 border-gray-300">
        <div className='column-first '>
            <p className='text-2xl mb-4 font-bold'>Shopifly</p>
            <div className='text-gray-600 text-sm font-semibold'>
                <p>We offer handpicked, high-quality products to suit your style.</p>
                <p>Explore our diverse range of products, from fashion to home decor.</p>
                <p>Shop with confidence and discover the latest trends at unbeatable prices.</p>
                <p>Shopifly is your one-stop destination for all your shopping needs.</p>

            </div>
        </div>
        <div className="coloumn-sec">
        <p className='text-2xl mb-4 font-bold'>Company</p>
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy Policy</p>
        </div>
        <div className='third-col'>
        <p className='text-2xl mb-4 font-bold'>Get in Touch</p>
            <p>+91 1234567890</p>
            <p>adityakrishna585@gmail.com</p>
        </div>
      </div>
      <div className='flex justify-center items-center py-6'>Copyright 2024@ Aditya Krishna - All Right Reserved.</div>
    </div>
  )
}

export default Footer
