import React from 'react'
import { heroImg } from '../assets/frontend_assets/assets'
import { useEffect } from 'react'
function Hero({ scrollToLatestCollection }) {
  const [imgIndex, setImgIndex] = React.useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex(index => { return ((index + 1) % heroImg.length) })
    }, 4000)
    return () => clearInterval(interval);
  }, [])
  return (
    <div className='border border-gray-400 w-full bg-white
    '>
      <section className="w-full min-h-[500px]  bg-white px-6 py-6 sm:py-0 ">
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-10 items-center">

          {/* Text Section */}
          <div>
            <h1 className="text-4xl text-gray-500 sm:text-5xl font-bold leading-tight mb-6">
              Welcome to <span className="text-black">Your Brand</span>
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              We help you build your digital presence with style, power, and purpose.
            </p>

            <button onClick={scrollToLatestCollection} className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition-all">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full h-full flex justify-center items-center overflow-hidden">
            <img
              src={heroImg[imgIndex]}
              alt="Hero"
              className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>


    </div>
  )
}

export default Hero
