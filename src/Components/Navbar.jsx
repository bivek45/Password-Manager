import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 '>

      <div className="myContainer flex justify-between items-center px-4 py-5 h-19">
        <div className="logofont-bold text-white text-2xl">
          <span className='text-green-700'>&lt;</span>  
          Pass
          <span className='text-green-700'>Manager/&gt;</span>
        </div>
        <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold text-white' href="/">Home</a>
          </li>
        </ul>
        <button className='text-white bg-green-300 my-5 rounded-full flex gap-3 justify-between items-center ring-white ring-2' >
          <img className='invert w-10 p-1' src="/icons/github.svg" alt="Github Logo" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav>

  )
}

export default Navbar
