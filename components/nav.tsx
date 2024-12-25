
import React from 'react'
import {AiFillThunderbolt} from 'react-icons/ai'


function Nav() {

  return (
    <nav className="absolute top-0 container px-5 lg:px-[10rem] mx-auto mt-5 mb-4 z-40">
        <div className="bg-mynav rounded-full px-8 py-2 text-mygray">
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-x-16">
                    <div className='flex items-center gap-x-2'>
                        <p className="font-semibold font-mono text-lg text-white">Fleek</p>
                        <AiFillThunderbolt size={40} className='text-yellow-700' />
                    </div>
                    
                    <ul className="flex flex-row items-center gap-x-8">
                        <li>How it works</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Reseource</li>
                    </ul>
                </div>

                

                <div className="flex items-center gap-x-3 text-white">
                     <button className="px-4 py-2 font-semibold font-sans">Log in</button>
                     <p>|</p>
                     <button className="px-4 py-2 rounded-full text-md font-semibold font-sans bg-gradient-to-r from-myblue to-mybg border-[0.5px] border-myblue">Get Started</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav