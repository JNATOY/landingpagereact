import React from 'react'
import { FaCheck } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiSolidLock, BiSolidGift } from "react-icons/bi";
import axios from 'axios'

function Pricedos() {
    return (
        <section className='py-5' style={{ backgroundImage: 'url("https://i.postimg.cc/MHZzCr6t/fondo2.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className='px-4 md:mx-20 md:px-20 '>
                <div className='py-3 text-black '>
                    <h2 className='text-xl md:text-3xl font-bold py-5  text-black'>
                        Logra mejorar tus finanzas, generar más ahorros, eliminar todas tus deudas, vuelverte más productivo, tomar mejores decisiones, ser un experto planificando y alcanzar la libertad financiera.
                    </h2>
                    <h3 className='text-xl md:text-3xl   font-semibold py-5  text-black'>
                        con solo aplicar las mejores estrategias y tacticas de gestión de presupuesto y planificación más efectivas del mundo
                    </h3>
                    <h4 className='text-xl md:text-3xl   py-5  text-black'>
                        Tu tranquilidad financiera merece la pena, el exito esta en tus manos
                    </h4>
                    <h4 className='text-xl md:text-3xl font-semibold py-5  text-black'>
                        <span className='bg-purple-600 text-white'>¿Estás listo para empezar?</span>
                    </h4>
                </div>
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-2 md:py-10">
                        <img
                            src='/src/assets/images/competencia.png'
                            alt="Arfan"
                            className="h-420 w-290 rounded-lg object-cover"
                        />
                        <div className=" border-fuchsia-700 rounded-2xl border-4 justify-center">
                            <div className=''>
                                <h2 className='flex gap-2 py-2 mx-2'>
                                    <p className='text-2xl md:text-3xl font-bold text-black'>Plantilla de presupuesto y planificador avanzado</p>
                                </h2>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Metodología <span className='text-purple-700'>50-30-20 </span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Registro gastos  <span className='text-purple-700'>detallado</span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Dashboard <span className='text-purple-700'>Anual</span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Dashboard <span className='text-purple-700'>Ahorros</span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Pago de deuda <span className='text-purple-700'>Bola de nieve</span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Planificador <span className='text-purple-700'>mensual</span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Planificador<span className='text-purple-700'> Semanal</span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Calendario<span className='text-purple-700'> Inteligente</span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Lista de tareas + importantes <span className='text-purple-700'></span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BsFillCheckCircleFill className='text-amber-400 text-2xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>Contador de tareas <span className='text-purple-700'></span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BiSolidGift className='text-red-500 text-3xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>BONUS 01: Plan de Negocio Exitoso <span className='text-purple-700'></span></p>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <BiSolidGift className='text-red-500 text-3xl mx-4' />
                                    </div>
                                    <p className='text-xl md:text-xl font-bold text-black'>BONUS 02: Plantilla para contratar personal <span className='text-purple-700'></span></p>
                                </div>
                                <div className="mt-6">
                                    <p className='line-through text-center text-3xl text-red-600 text-solid'>Antes 180.99 USD</p>
                                    <p>
                                        <span className="flex justify-center text-center text-green-600 font-bold text-5xl md:text-6xl tracking-tight">
                                            $19.99 USD
                                        </span>
                                        <div className="mt-6 flex items-center justify-center">
                                            <BiSolidLock className='text-amber-400 text-4xl md:text-xl mr-2' />
                                            <p className="text-base font-medium text-black">** Oferta por tiempo limitado ** Un pago único y seguro.</p>
                                        </div>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center">
                                    <button className="text-xl sm:text-3xl lg:text-3xl bg-gradient-to-r from-yellow-400 to-yellow-400 hover:from-yellow-400 hover:to-yellow-400 text-black font-bold w-auto sm:max-w-[600px] h-auto px-4 py-2 sm:px-6 sm:py-6 rounded-md hover:scale-90 duration-500"
                                        onClick={() => {
                                            axios
                                                .post('http://localhost:3000/create-order')
                                                .then(
                                                    (res) =>
                                                        (window.location.href = res.data.init_point)
                                                );
                                        }}
                                    >
                                        ¡SÍ, QUIERO MIS PLANTILLAS AHORA!
                                    </button>
                                    <img
                                        src="/src/assets/images/metodosdepago.png"
                                        alt="Arfan"
                                        className="h-21px w-200px mx-auto rounded-lg py-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Pricedos