import React from 'react'
import Title from '../components/Title'
function About() {
  return (
    <div>
          <div className='py-10'>

<div className='flex justify-center items-center'> 
<Title text1='About' text2=' us' />
</div>

<div className='upper-sec flex flex-col sm:flex-row mt-4 gap-10 justify-center items-center'>
<img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
<div className='right-sec-wrapper'>
<div className='mb-4'> 
<p > Lorem ipsum dolor sit amet consectetur</p>
<p> adipisicing elit. Consequatur nihil excepturi necessitatibus esse </p>
<p>recusandae explicabo culpa, sunt at a dolores corrupti ut in atque modi dolore quod magni ipsum non  </p>
</div>

<div className='mb-4'> 
<p> Lorem ipsum dolor sit amet consectetur</p>
<p> adipisicing elit. Consequatur nihil excepturi necessitatibus esse </p>
<p>recusandae explicabo culpa, sunt at a dolores corrupti ut in atque modi dolore quod magni ipsum non  </p>
</div>

<h1 className='text-gray-700 font-medium text-lg'>Our Mission</h1>
<div> 
<p > Lorem ipsum dolor sit amet consectetur</p>
<p> adipisicing elit. Consequatur nihil excepturi necessitatibus esse </p>
<p>recusandae explicabo culpa, sunt at a dolores corrupti ut in atque modi dolore quod magni ipsum non  </p>
</div>
</div>
</div>
</div>

    </div>
  )
}

export default About
