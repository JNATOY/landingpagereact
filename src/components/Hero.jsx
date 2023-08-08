import React from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-8 h-[90vh] bg-cover' style={{ backgroundImage: 'url("https://i.postimg.cc/wMDYQRs8/1604080690-new-header-bg1.webp")' }}>
      {/* Nueva fila */}
      <div className='md:col-span-8 flex items-center justify-center py-20 text-white'>
        <div className='text-center'>
          <h3 className='text-2xl'>Worlds Best Push-Button App For </h3>
        </div>
        <div className='text-center'>
          <h1 className='text-2xl'>Unlimited FREE Buyer Traffic On Autopilot</h1>
        </div>
        <div className='text-center'>
          <h2 className=' text-2xl'>In Any Niche … ALL DAY EVERY DAY!</h2>
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