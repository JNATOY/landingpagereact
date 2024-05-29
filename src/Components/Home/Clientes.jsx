import React from 'react'
import { FaCheck } from "react-icons/fa";

function Clientes() {
    return (
        <section className='px-4 md:px-8'>

            <div className='md:col-span-8 flex flex-col items-center justify-center py-5 text-black'>
                <h3 className='text-3xl md:text-6xl font-semibold   py-5 text-center text-red-500'>
                    Ahora te estarás preguntando, “¿Esto realmente funcionará para mí?” La gestion del presupuesto y la planificación es para ti si eres ...
                </h3>
            </div>
            <div className=''></div>
            <div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 ">
                    <div className="w-full md:w-6/12">
                        <div className='mx-3 md:mx-0'>
                            <div className='flex gap-2 py-2 mb:py-2'>
                                <div>
                                    <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                </div>
                                <p className='text-2xl md:text-3xl text-black'>Emprendedor/a que quieren <span className='font-bold'>administrar sus presupuestos de manera mas efectiva y a planificar de manera más estratégica</span> para alcanzar el éxito de su negocio</p>
                            </div>
                            <div className='flex gap-2 py-2 mb:py-2'>
                                <div>
                                    <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                </div>
                                <p className='text-2xl md:text-3xl text-black'>Dueño de un pequeño/mediano negocio que busca <span className='font-bold'> planificar estratégicamente para el crecimiento y la estabilidad</span> de su empresa.</p>
                            </div>
                            <div className='flex gap-2 py-2 mb:py-2'>
                                <div>
                                    <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                </div>
                                <p className='text-2xl md:text-3xl text-black'>Coach o speaker que busca<span className='font-bold'> diversificar sus ingresos e invertir estrategicamente</span> en su desarrollo personal para lograr mayor rentabilidad</p>
                            </div>
                            <div className='flex gap-2 py-2 pb-4 mb:py-2'>
                                <div>
                                    <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                </div>
                                <p className='text-2xl md:text-3xl text-black'>¡Absolutamente CUALQUIER PERSONA en <span className='font-bold'>CUALQUIER industria</span> que busque ser una mejor versión de si mismo/a y alcanzar el exito y la libertad financiera</p>
                            </div>
                        </div>
                    </div>
                    <img
                        src='../../../img/competencia.png'
                        alt="Arfan"
                        className="h-420 w-290 rounded-lg object-cover"
                    />
                </div>
            </div>
        </section >
    );
}
export default Clientes