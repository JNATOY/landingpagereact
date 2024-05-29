import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import video from '../../assets/videos/video.mp4';
import imagenvideo from '../../assets/videos/imagenvideo.png';




function Testimonials() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoClick = () => {
        setIsVideoPlaying(true);
    };

    return (
        <section className='px-1 md:px-8' id='testimonios' style={{ backgroundImage: 'url("https://i.postimg.cc/J0p0Df7H/fondo3.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='md:col-span-8 flex flex-col items-center justify-center py-10 text-black'>
                <h1 className='text-3xl md:text-7xl text-center my-4 font-bold'>¡Nuestra comunidad nos avala!</h1>
            </div>

            <div className='md:col-span-5 flex flex-col items-center justify-center z-index px-4'>
                <div className='items-center justify-center relative w-full h-full md:w-3/5 md:h-3/5'>
                    <div className='h-[30vh] w-full md:h-[55vh]'>
                        <div className={`flex items-center justify-center absolute inset-0 border shadow-2xl shadow-black rounded-md overflow-hidden drop-shadow-sm group ${isVideoPlaying ? 'hidden' : 'block'}`} style={{ backgroundImage: `url(${imagenvideo})`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <FaPlayCircle className='text-white text-6xl cursor-pointer' onClick={handleVideoClick} />
                        </div>
                        <div className='flex items-center justify-center w-full' style={{ width: '100%', height: '100%' }}>
                            {isVideoPlaying && (
                                <video src={video} className='w-full h-full object-cover md:object-cover rounded-md' controls autoPlay muted loop playsInline />
                            )}
                        </div>
                    </div>
                </div>
                <div className='text-center text-black mt-4 md:mt-8 px-4 md:px-8 items-center'>
                        <h3 className='text-2xl md:text-5xl text-black font-semibold py-5'>
                            Solo tú tienes el poder para avanzar desde el lugar <br />
                            donde ahora te encuentras hasta aquel en el <br />que te gustaría estar.
                        </h3>
                    <button className='bg-amber-400 hover:scale-90 duration-500 text-2xl md:text-5xl text-black font-bold px-auto md:px-20 py-5 mt-4 rounded hover:bg-amber-500'>Quiero descargar mis plantillas</button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;