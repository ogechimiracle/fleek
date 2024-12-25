'use client'

import CarouselComponent from "@/components/carousel";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import { companyLogos } from "@/lib/constant";
import Image from "next/image";
import { useEffect } from "react";

import {AiTwotoneThunderbolt} from 'react-icons/ai'
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';


export default function Home() {
    useEffect(() => {
          AOS.init({
            duration: 1000, // You can customize the duration here
            once: false, // Whether animation should happen only once
          });
        }, []);
  return (
    <div className="relative h-full">
      <Hero/>
      <Nav/>

      <div className="container px-5 lg:px-[10rem] mx-auto py-8">
          
          <div className="mt-5 mb-5">
            <p className="text-center text-md tracking-wider leading-5 text-gray-200 uppercase">trusted by beloved patners and customers</p>
            <div className="mt-4" data-aos='fade-up'>
              <div className="flex items-center justify-center space-x-8">
              {companyLogos.map((item,index)=>(
                <div key={index} className="flex items-center gap-x-2 my-2">
                    <p className="text-md">{item.name}</p>
                    <Image src={item.logoUrl} alt={item.name} height={40} width={40} />
                </div>
              ))}
              </div>
              <hr className="mt-5 mb-5 bg-gradient-to-tr from-mygray via-white to-mygray" />
            </div>
          </div>

          <div className="mt-5 mb-5 py-3">
            <div className="text-center" data-aos='fade-in'>
              <p className="text-[55px] font-sans font-extrabold leading-none tracking-tight bg-gradient-to-r from-mygray via-white to-mygray bg-clip-text text-transparent">Powerful features just for <br /> you with (TEEs) </p>

              <p className="font-mono mt-5 font-extrabold leading-normal tracking-tight bg-gradient-to-r from-mygray via-white to-mygray bg-clip-text text-transparent">Our platform offers a range of powerful features design to elavate your <br />  web3 experience using our Trusted Executional Environment</p>
            </div>

            <div className="mt-10 grid grid-cols-2 place-content-center justify-center gap-x-8">

              <div className="w-full h-full flex flex-col gap-4 px-5">

                <div className="relative w-full h-full bg-gradient-to-tr from-mybg  to-mynav bg-[length:100%_100%] bg-[0%_95%] px-5 py-3 rounded-xl border-[0.5px] border-mygray" data-aos='fade-down'>
                  <div className="mt-4">
                    <AiTwotoneThunderbolt size={40} className="text-yellow-800" />
                  </div>
                  <div className="absolute bottom-0">
                  <p className="text-xl text-white">Deploy seemlessly with Fleek</p>
                   <div className="py-3">
                      <p>Build and deploy your app while using fleek with one touch configuration</p>
                   </div>
                   </div>
                </div>

                <div className="relative w-full h-full bg-gradient-to-tl from-mybg to-mynav bg-bg-[length:100%_100%] bg-[0%_95%] px-5 py-3 rounded-xl border-[0.5px] border-mygray" data-aos='fade-up'>
                  <div className="mt-4">
                    <Image src='/stream.webp' alt="stream" width={100} height={100} />
                  </div>
                  <div className="absolute bottom-0">
                  <p className="text-xl text-white">Stream on fleek</p>
                   <div className="py-3">
                      <p>Go live effortlessly with Fleek's tool.</p>
                   </div>
                   </div>
                </div>

              </div>

              <div className="px-5">

                <div className="w-full bg-mybg shadow-md border-[0.4px] border-mygray px-5 py-4 rounded-2xl text-center" data-aos='fade-right'>
                    <p className="text-3xl font-bold bg-gradient-to-r from-mygray via-white to-mygray bg-clip-text text-transparent">Transfer money <br /> to home</p>

                    <p className="text-md px-5 mt-4 mb-2">send money back to your local account at the lowest market rate</p>

                    <div className="px-4 py-4 grid place-content-center">
                      <Image src='/country.png' alt="countries" width={250} height={150} />
                    </div>
                </div>

              </div>

            </div>

          </div>


          <div className="m-8 mb-8" data-aos='fade-up'>
              <CarouselComponent/>
          </div>

      </div>


      <Footer/>
     

    </div>
  );
}
