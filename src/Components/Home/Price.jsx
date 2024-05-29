import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiSolidLock, BiSolidGift } from "react-icons/bi";
import axios from 'axios'


function Price() {
    return (

        <section className='px-auto pb-9'style={{ backgroundImage: 'url("https://i.postimg.cc/DZVvYqwZ/fondo8.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg-cover  md:col-span-8 flex flex-col items-center justify-center py-10 text-black'>
            <div className='md:col-span-8 flex flex-col items-center justify-center text-black py-0'>
                <h3 className='text-3xl md:text-6xl font-semibold py-5 text-center text-white'>
                Toma ACCIÓN hoy y adquiere las plantillas de &quot;Presupuesto y planificador avanzado&quot; <br/>
                </h3>
                <h2 className='text-2xl md:text-4xl font-semibold pt-8 text-center text-white'>
                Estás en el camino MÁS RÁPIDO para convertirte <br/>en un exitoso
                gestor del presupuesto y la planificación<br/><span className='underline'> (que puede llevar a muchos AÑOS aprender) </span>
                </h2>
            </div>
            </div>
            <div className='flex justify-center' id='producto'>
                <div className="m-12 bg-gray-700 max-w-[700px]  rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5  ">
                    <img src="https://res.cloudinary.com/du5mh2ho1/image/upload/v1694019631/WEB%20PLANTILLA/fotoprice_oa8xmp.png" alt="Imagen de cabecera" className="w-full max-h-96 object-cover rounded-t-xl" />
                    <h4 className="flex text-center text-3xl md:text-5xl  text-white font-bold py-2">Plantillas de Planificación y Presupuesto Avanzado</h4>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Metodología <span className='text-amber-400'>50-30-20 </span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Registro gastos  <span className='text-amber-400'>detallado</span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Dashboard <span className='text-amber-400'>Anual</span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Dashboard <span className='text-amber-400'>Ahorros</span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Pago de deuda <span className='text-amber-400'>Bola de nieve</span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Planificador <span className='text-amber-400'>mensual</span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Planificador<span className='text-amber-400'>Semanal</span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Calendario<span className='text-amber-400'>Inteligente</span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-amber-400 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Lista de tareas + importantes <span className='text-amber-400'></span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BsFillCheckCircleFill className='text-white text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>Contador de tareas <span className='text-amber-400'></span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BiSolidGift className='text-red-500 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>BONUS 01: Plan de Negocio Exitoso <span className='text-amber-400'></span></p>
                    </div>
                    <div className='flex gap-2 '>
                        <BiSolidGift className='text-red-500 text-3xl' />
                        <p className='text-xl md:text-2xl font-bold text-white'>BONUS 02: Plantilla para contratar personal <span className='text-amber-400'></span></p>
                    </div>
                    <div className="mt-6">
                        <p className='line-through text-center text-3xl text-red-600 text-solid'>Antes 180.99 USD</p>
                        <p>
                            <span className="flex justify-center text-center text-5xl md:text-7xl font-light tracking-tight text-white">
                                $19.99 USD
                            </span>
                            <div className="mt-6 flex items-center justify-center">
                                <BiSolidLock className='text-amber-400 text-4xl md:text-xl mr-2' />
                                <p className="text-base font-medium text-white">** Oferta por tiempo limitado ** Un pago único y seguro.</p>
                            </div>
                        </p>
                    </div>
                    <div className="pt-7 pb-2 md:pb-2 flex justify-center">
                        <button className="text-xl sm:text-3xl lg:text-3xl bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold w-auto sm:max-w-[600px] h-auto px-4 py-2 sm:px-6 sm:py-6 rounded-md bg-indigo-100 hover:scale-90 duration-500"
                            onClick={() => {
                                axios
                                    .post('http://localhost:3000/create-order')
                                    .then(
                                        (res) =>
                                            (window.location.href = res.data.init_point)
                                    );
                            }}
                        >
                            !SÍ, QUIERO MIS PLANTILLAS AHORA!
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Price