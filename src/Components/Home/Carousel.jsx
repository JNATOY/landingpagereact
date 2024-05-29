import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';

function Carousel() {
    return (
        <>
            <div className='mx-4 mb:px-8'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    rewind={true}
                    navigation={true}
                    pagination={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='py-16 text-3xl'>
                        <div className="swiper-slide">
                            <div className="card text-center bg-zinc-100 p-8 rounded-lg shadow-md">
                                <img src={image1} alt="Imagen de la tarjeta" className="w-40 h-40 rounded-full mx-auto -mt-16" />
                                <div className="flex gap-2 justify-center items-center">
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                </div>
                                <p>
                                    &quot;La calidad de la información que nos ofrece las plantillas es genial!!, da el impulso a avanzar y ser cada vez mejor en el desarrollo personal y profesional.Que sigan los éxitos y gracias por compartir!!!&quot;
                                </p>
                                <h3 className='font-bold'>Satya Nadella</h3>
                                <h4 className='text-blue-600'>CEO, Microsoft</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-16 text-3xl'>
                        <div className="swiper-slide">
                            <div className="card text-center bg-zinc-100 p-8 rounded-lg shadow-md">
                                <img src={image2} alt="Imagen de la tarjeta" className="w-40 h-40 rounded-full mx-auto -mt-16" />
                                <div className="flex gap-2 justify-center items-center">
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                </div>
                                <p>
                                    &quot;He comprado varias plantillas y han valido cada centavo que pagué, encontre mucha información valioso y que realmente me sirvio un montón, hay tanto valor en su contenido y es super entendible.&quot;
                                </p>
                                <h3 className='font-bold'>Satya Nadella</h3>
                                <h4 className='text-blue-600'>CEO, Microsoft</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-16 text-3xl'>
                        <div className="swiper-slide">
                            <div className="card text-center bg-zinc-100 p-8 rounded-lg shadow-md">
                                <img src={image3} alt="Imagen de la tarjeta" className="w-40 h-40 rounded-full mx-auto -mt-16" />
                                <div className="flex gap-2 justify-center items-center">
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange fa fa-star" aria-hidden="">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                </div>
                                <p>
                                    &quot;Estoy feliz por haber comprado las plantilla de presupuesto y el planificador , me han ayudado mucho, Su simplicidad y practica en las plantillas es genial&quot;
                                </p>
                                <h3 className='font-bold'>Satya Nadella</h3>
                                <h4 className='text-blue-600'>CEO, Microsoft</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-16 text-3xl'>
                        <div className="swiper-slide">
                            <div className="card text-center bg-zinc-100 p-8 rounded-lg shadow-md">
                                <img src={image1} alt="Imagen de la tarjeta" className="w-40 h-40 rounded-full mx-auto -mt-16" />
                                <div className="flex gap-2 justify-center items-center">
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                </div>
                                <p>
                                    &quot;Gracias por compartir las plantillas, me sirvieron mucho las plantillas de finanzas, por el contenido de valor, en mi emprendimiento , es una herramienta valiosa para llevar mejor mis cuentas y organizarme mejor.&quot;
                                </p>
                                <h3 className='font-bold'>Satya Nadella</h3>
                                <h4 className='text-blue-600'>CEO, Microsoft</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-16 text-3xl'>
                        <div className="swiper-slide">
                            <div className="card text-center bg-zinc-100 p-8 rounded-lg shadow-md">
                                <img src={image2} alt="Imagen de la tarjeta" className="w-40 h-40 rounded-full mx-auto -mt-16" />
                                <div className="flex gap-2 justify-center items-center">
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                </div>
                                <p>
                                    &quot;Recomiendo comprar las plantillas, por que si dan resultados, son fácil de usarlas y brindan un buen servicio al cliente.&quot;
                                </p>
                                <h3 className='font-bold'>Satya Nadella</h3>
                                <h4 className='text-blue-600'>CEO, Microsoft</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-16 text-3xl'>
                        <div className="swiper-slide">
                            <div className="card text-center bg-zinc-100 p-8 rounded-lg shadow-md">
                                <img src={image3} alt="Imagen de la tarjeta" className="w-40 h-40 rounded-full mx-auto -mt-16" />
                                <div className="flex gap-2 justify-center items-center">
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                    <i className="text-orange fa fa-star" aria-hidden="">
                                        <FaStar className="text-yellow-400 text-3xl" />
                                    </i>
                                </div>
                                <p>
                                    &quot;Super recomendado , vale el 500 % la pena! nunca he visto algo tan práctico y facil de usar para llevar mejor mis finanzas!gracias. &quot;
                                </p>
                                <h3 className='font-bold'>Satya Nadella</h3>
                                <h4 className='text-blue-600'>CEO, Microsoft</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Carousel;
