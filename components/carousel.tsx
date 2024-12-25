


import { features } from '@/lib/constant'
import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


function CarouselComponent() {
  return (
    <div className='w-full'>
        <div className='mt-5'>
            <p className='text-center text-[50px] bg-gradient-to-r from-mygray via-white to-mygray bg-clip-text text-transparent font-sans font-extrabold leading-none tracking-tight'>The fatest way to build on top of <br/> Fleek's Newtork</p>
        </div>

        <div className="w-full flex  justify-center items-center">
            <div className='py-4 max-w-[57%] text-center text-lg'>
                <p>One of the best way to build fast on top of fleek's network is to use more their top notch features/functions</p>
            </div>
        </div>

        <div className='flex items-center justify-center mt-5'>
            <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-4xl"
            >
            <CarouselContent>
                {features.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    <div className='px-3 py-4 rounded-lg bg-mynav h-[150px] space-y-2'>
                        <p className='text-white font-semibold'>{item.title}</p> 
                        <span className=''>{item.content}</span>
                    </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>

       
    </div>
  )
}

export default CarouselComponent