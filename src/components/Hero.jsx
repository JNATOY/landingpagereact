import React from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Hero = () => {
  return (


    <section className='grid grid-cols-1 md:grid-cols-8 h-[120vh] bg-cover' style={{ backgroundImage: 'url("https://i.postimg.cc/wMDYQRs8/1604080690-new-header-bg1.webp")' }}>
      {/* Nueva fila */}
      <div className='md:col-span-8 grid grid-rows-3 gap-1 items-center justify-center py-20 text-white'>
        <div className='row-span-1 text-center'>
          <h3 className='text-xl md:text-3xl'>Las mejores plantillas </h3>
        </div>
        <div className='row-span-1 text-center'>
          <h1 className='text-3xl md:text-5xl'>Unlimited FREE <span className='underline'>Buyer Traffic</span> On Autopilot</h1>
        </div>
        <div className='row-span-1 text-center'>
          <h2 className='text-2xl md:text-4xl'>In Any Niche … <span className='text-amber-400'>ALL DAY EVERY DAY!</span></h2>
        </div>
      </div>

      {/* Primera columna */}
      <div className='md:col-span-5 flex items-center justify-center'>
        <h1>Video</h1>
      </div>

      {/* Segunda columna */}
      <div className=' md:col-span-3'>
        <div className='flex gap-2 '>
          <BsFillCheckCircleFill className='text-amber-400 text-5xl' />
          <p className='text-2xl font-bold text-white'>Fully-automated software for <span className='text-amber-400'>SET & FORGET</span> traffic 24/7</p>
        </div>
        <div className='flex gap-2 my-4'>
          <BsFillCheckCircleFill className='text-amber-400 text-5xl' />
          <p className='text-2xl font-bold text-white'>Fully-automated software for SET & FORGET traffic 24/7</p>
        </div>
        <div className='flex gap-2 my-4'>
          <BsFillCheckCircleFill className='text-amber-400 text-5xl' />
          <p className='text-2xl font-bold text-white'>Fully-automated software for SET & FORGET traffic 24/7</p>
        </div>
        <div className='flex gap-2 my-4'>
          <BsFillCheckCircleFill className='text-amber-400 text-5xl' />
          <p className='text-2xl font-bold text-white'>Fully-automated software for SET & FORGET traffic 24/7</p>
        </div>
        <div className='flex gap-2 my-4'>
          <BsFillCheckCircleFill className='text-amber-400 text-5xl' />
          <p className='text-2xl font-bold text-white'>Fully-automated software for SET & FORGET traffic 24/7</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;