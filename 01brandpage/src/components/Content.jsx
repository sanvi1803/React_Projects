import React from 'react'
// import "../src/index.css"
function Content() {
  return (
    <div className='flex items-center w-[80vw] m-auto my-10 content'>
      <div className='flex first flex-col gap-4 left'>
        <h1 className='head'>YOUR FEET
          DESERVE
          THE BEST</h1>
        <p className='text-[16px] font-semibold w-[30vw]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='flex gap-3'>
          <button>Shop Now</button>
          <button className='second-btn'>Category</button>
        </div>
        <p>Also Available On</p>
        <div className='flex gap-2'>
          <img className='w-6 cursor-pointer' src="/images/flipkart.png" alt="" />
          <img className='w-6 cursor-pointer' src="/images/amazon.png" alt="" />
        </div>
        <div>

        </div>
      </div>
      <div className='second'>
        <img className='w-[100%] h-[100%] shoe' src="/images/shoe_image.png" alt="" />
      </div>
    </div>
  )
}

export default Content
