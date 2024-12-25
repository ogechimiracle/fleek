'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';

function Hero() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // You can customize the duration here
          once: false, // Whether animation should happen only once
        });
      }, []);

  return (
    <div className='w-full h-[580px] bg-hero bg-cover bg-no-repeat overflow-y-clip relative'>
        <div className='absolute top-0 right-0 w-full h-full bg-mybg/90'>
            <div className='mt-20 mb-8 container px-5 lg:px-[10rem] mx-auto py-8'>
                <div className='text-center mt-4' data-aos='fade-down'>
                    <p className='text-[75px] font-sans font-extrabold leading-none tracking-tight bg-gradient-to-r from-mygray via-white to-mygray bg-clip-text text-transparent'>Global Payout for <br /> web3 business</p>
                </div>
                <div className='mt-4 mb-3 text-center text-md space-y-4' data-aos='fade-in'>
                    <p>send funds securely to your vendors, contractors and employee <br /> in real time in +50 countires </p>
                    <button className='bg-mybg px-4 py-2 rounded-full border-[0.5px] border-mybg border-r-myblue border-t-myblue text-white font-semibold'>Contact sales</button>
                </div>

                <div className='grid place-content-center' data-aos='fade-up'>
                    <Image src='/globe.png' alt='globe' width={700} height={550} />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero