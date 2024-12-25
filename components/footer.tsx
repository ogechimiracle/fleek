

import React from 'react'
import {AiFillThunderbolt} from 'react-icons/ai'

function Footer() {
  return (
    <footer className='mt-12 py-5 w-full'>
        
        <div className='container px-5 lg:px-[10rem] mx-auto'>
        

        <div className='mt-4 grid grid-cols-1 lg:grid-cols-5 gap-x-4 w-full'>

            <div className="w-full lg:col-span-2">
                <div className='flex items-center gap-x-3'>
                    <AiFillThunderbolt size={40} className='text-yellow-700' />
                    <p className='text-white font-bold text-xl'>Fleek</p>
                </div>

                <p className="mt-3">The lightening fast on chain</p>
            </div>

            <div className="w-full">
                <p className='text-gray-300 font-semibold text-lg'>Company</p>

                <ul className='mt-4 flex flex-col gap-y-3'>
                    <li>About us</li>
                    <li>Carres</li>
                    <li>Contact</li>
                    <li>Help</li>
                    <li>Legal</li>
                </ul>
            </div>

            <div className="w-full">
                <p className='text-gray-300 font-semibold text-lg'>Products</p>

                <ul className='mt-4 flex flex-col gap-y-3'>
                    <li>TEEs</li>
                    <li>Blog</li>
                    <li>Developer api</li>
                    <li>All resources</li>
                    <li>Build & deploy</li>
                </ul>
            </div>

            <div className="w-full py-2 px-1 border-[0.4px] border-mygray rounded-md">
                <p className='text-white font-semibold text-center'>Build Seemlessly</p>

                <p className='mt-1 text-xs px-2'>Build, deploy and maintain fast with Fleeks Networks</p>

                <div className='flex flex-col items-center justify-center mt-5 gap-2'>
                    <button className='px-4 py-2 rounded-full bg-myblue text-black'>Get Started</button>
                    <button className='px-4 py-2 rounded-full bg-myblue text-black'>Contact sales</button>
                </div>
            </div>

        </div>
        
        </div>
    </footer>
  )
}

export default Footer