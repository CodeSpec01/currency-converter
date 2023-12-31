import React from 'react'

function Navbar() {
  return (
    <div className='absolute w-full flex justify-center gap-[10%]'>

        <div className='flex justify-between align-middle bg-[#4960a6]/75 rounded-full pb-0 md:pb-2 mt-4 backdrop-blur-sm'>
            <a href="/" className='w-[40%] md:w-[25%] ml-2 md:ml-8'><img src="\public\courrency-compass-logo.png" /></a>
            <ul className='text-[10px] min-[375px]:text-sm gap-2 md:text-lg flex items-center justify-between md:gap-8 text-[#f6af85] mr-2 md:mr-8'>
                <li className='nav transition-transform duration-300 hover:scale-125'><a href="/">Home</a></li>
                <li className='nav transition-transform duration-300 hover:scale-125'><a href="/about">About</a></li>
                <li className='nav transition-transform duration-300 hover:scale-125'><a href="/about">Contact Us</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
