import React, { useState } from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";
import video from '../../assets/videos/video.mp4';
import { FaPlayCircle } from 'react-icons/fa';
import { HiChevronDoubleRight } from "react-icons/hi";
import imagenvideo from '../../assets/videos/imagenvideo.png';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (

    <section className='grid grid-cols-1 md:grid-cols-8 bg-cover px-1 md:px-8 pb-5 md:pb-5' id='inicio' style={{ backgroundImage: 'url("https://i.postimg.cc/wMDYQRs8/1604080690-new-header-bg1.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Nueva fila */}
      <div className='md:col-span-8 items-end justify-center py-0 md:py-5 pb-4 md:pt-24 sm:pt-24 pt-24 text-white'>
        <div className='row-span-1 text-center'>
          <h3 className='text-xl md:text-3xl'>Lo último que cambiará tu Vida en 360 Grados</h3>
        </div>
        <div className='row-span-1 text-center '>
          <h1 className='text-3xl md:text-6xl'>Descubre los secretos para máximizar tu <span className='underline'>Productividad y organizarte</span> mejor en tus finanzas y vida personal</h1>
        </div>
        <div className='row-span-1 text-center'>
          <h2 className='text-2xl md:text-4xl'>Accede a las mejores plantillas y recursos <br/>desde cualquier lugar... <span className='text-amber-400'>Y LOS TENDRÁS DE POR VIDA!</span></h2>
        </div>
      </div>
      {/* Primera columna */}


      <div className='md:col-span-5 flex flex-col z-index px-4'>
        <div className=' items-center justify-center relative w-full h-full '>
          <div className='h-[33vh] w-full md:h-[65vh]'>
            <div className={`flex items-center justify-center absolute inset-0 border shadow-2xl shadow-black rounded-md overflow-hidden drop-shadow-sm group ${isVideoPlaying ? 'hidden' : 'block'}`} style={{ backgroundImage: `url(${imagenvideo})`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <FaPlayCircle className='text-white text-6xl cursor-pointer' onClick={handleVideoClick} />
            </div>
            <div className='flex items-center justify-center  w-full' style={{ width: '100%', height: '100%' }}>
              {isVideoPlaying && (
                <video src={video} className='w-full h-full object-cover md:object-cover rounded-md' controls autoPlay muted loop playsInline></video>
              )}
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-2xl md:text-3xl text-white text-center py-2'>
            Consigue <span className='text-amber-500'>las plantillas y recursos</span> ahora con el <span className='bg-amber-400 text-black'>89% de descuento</span>
          </h3>
          <div className='bg-amber-400  rounded hover:bg-amber-500 hover:scale-90 duration-500 w-full p-4 md:p-8 my-4 cursor-pointer'>
            <button className='flex text-2xl md:text-4xl font-bold  '>Haz Click para descargar las plantillas <HiChevronDoubleRight className='mt-auto text-6xl md:text-6xl'/></button>
          </div>
        </div>
      </div>

      {/* Segunda columna */}
      <div className=' md:col-span-3'>
      <div className='flex gap-3 py-2 mb:py-0'>
        <div className='text-2xl'>
          <BsFillCheckCircleFill className='text-amber-400 text-3xl'/>
          </div>
          <div>
            <p className='text-2xl font-bold text-white'>Domina la metodologia<span className='text-amber-400'> 50-30-20</span> y administra tus finanzas <span className='text-amber-400'>fácil y rápido</span> </p>
          </div>
        </div>
        <div className='flex gap-3 py-2 mb:py-2'>
        <div className='text-2xl'>
          <BsFillCheckCircleFill className='text-amber-400 text-3xl'/>
          </div>
          <div>
            <p className='text-2xl font-bold text-white'>Aprovecha <span className='text-amber-400'> las alertas de presupuesto</span> para controlar  tus gastos diarios</p>
          </div>
        </div>
        <div className='flex gap-2 py-2 mb:py-2 '>
          <div className='text-2xl'>
          <BsFillCheckCircleFill className='text-amber-400 text-3xl'/>
          </div>
          <div>
            <p className='text-2xl font-bold text-white'>Monitorea tus <span className='text-amber-400'>progresos financieros</span> con graficas mensuales y anuales y reduce tiempo y <span className='text-amber-400'>aumenta tus ahorros </span>
            </p>
          </div>
        </div>
        <div className='flex gap-2 py-2 mb:py-2 '>
          <div className='text-2xl'>
            <BsFillCheckCircleFill className='text-amber-400 text-3xl'/>
          </div>
          <div>
            <p className='text-2xl font-bold text-white'>Dispondrás de las mejores tablas estructuradas bajo el <span className='text-amber-400'>enfoque pomodoro y time blocking</span> para convertirte en una persona<span className='text-amber-400'> organizada, enfocada y productiva</span> </p>
          </div>
        </div>
        <div className='flex gap-2 py-2 mb:py-2 '>
          <div className='text-2xl'>
            <BsFillCheckCircleFill className='text-amber-400 text-3xl'/>
          </div>
          <div>
            <p className='text-2xl font-bold text-white'>Eliminas tus deudas con la metodología <span className='text-amber-400'>Bola de Nieve</span> y alcanza la libertad financiera</p>
          </div>
        </div>
        <div className='flex gap-2 py-2 mb:py-2 '>
          <div className='text-2xl'>
            <BsFillCheckCircleFill className='text-amber-400 text-3xl'/>
          </div>
          <div>
            <p className='text-2xl font-bold text-white'>Automatiza tus tareas con el uso de <span className='text-amber-400'>calenarios inteligentes</span> y alcanza tus metas y cumple tus compromisos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;