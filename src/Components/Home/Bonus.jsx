import React from 'react'
import { FaCheck } from "react-icons/fa";

function Bonus() {
    return (
        <section className='px-4 md:px-8' id='bonus'>

            <div className='md:col-span-8 flex flex-col items-center justify-center pb-10 text-black'>
                <h3 className='text-3xl md:text-6xl text-black font-semibold py-5 md:py-10 text-center'>
                    Si compras HOY, tendrás  <br />
                    acceso <span className='text-purple-800 underline text-bold'>GRATUITO</span> a los siguientes <span className='text-purple-800 underline text-bold'>BONUS</span>
                </h3>
            </div>
            <div className='border-dashed border-fuchsia-700 rounded-2xl border-8'>
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-2 md:py-10">
                        <img
                            src='../../../img/fondo.png'
                            alt="Arfan"
                            className="w-full md:w-6/12 rounded-lg object-cover"
                        />
                        <div className="w-full md:w-6/12">
                            <h1 className='text-3xl md:text-6xl text-black font-bold text-center'>🎁BONUS <span className='underline'>#1</span>🎁</h1>
                            <h2 className='text-3xl md:text-4xl text-black font-bold text-center py-2 md:py'><span className='underline'>Plan de negocio</span> para emprendedores</h2>
                            <div className='mx-3 md:mx-0'>
                                <div className='flex gap-2 py-2 mb:py-2'>
                                    <div>
                                        <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                    </div>
                                    <p className='text-2xl md:text-3xl text-black'>17 páginas de contenido de alto valor que te harán <span className='font-bold'>ahorrar tiempo y dinero</span></p>
                                </div>
                                <div className='flex gap-2 py-2 mb:py-2'>
                                    <div>
                                        <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                    </div>
                                    <p className='text-2xl md:text-3xl text-black'><span className='font-bold'>Ejemplos prácticos</span> de como desarrollar tus estrategias y conseguir resultados increíbles</p>
                                </div>
                                <div className='flex gap-2 py-2 mb:py-2'>
                                    <div>
                                        <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                    </div>
                                    <p className='text-2xl md:text-3xl text-black'>Aprende como obtener una <span className='font-bold'>visión más clara</span> de tus objetivos y estrategias</p>
                                </div>
                                <div className='flex gap-2 py-2 mb:py-2'>
                                    <div>
                                        <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                    </div>
                                    <p className='text-2xl md:text-3xl text-black'> Descubre los secretos para <span className='font-bold'>gestionar eficientemente</span> y convertir tu negocio en todo un Éxito</p>
                                </div>
                                <div className='flex gap-2 pb-4 mb:py-2'>
                                    <div>
                                        <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                    </div>
                                    <p className='text-2xl md:text-3xl text-black'>Domina <span className='font-bold'>el arte de planificar y desarrollar estrategias</span> para alcanzar el éxito empresarial</p>
                                </div>
                            </div>
                            <p className='bg-rose-200 font-bold text-center'>⚠️ TODA LA INFORMACIÓN DEL DOCUMENTO FUE ELABORADO POR EXPERTOS CON MUCHOS AÑOS DE EXPERIENCIA Y AHORA ESTARÁ A TU ALCANCE PARA SIEMPRE ⚠️</p>
                            <p className=' font-bold text-center text-4xl text-red-600  '>Valorado en más de <span className='line-through text-red-600 '>$97 usd</span></p>
                            <p className=' font-bold text-center text-5xl text-green-500  '>Te lo llevas <span className='underline'>Gratis</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5'></div>
            <div className='border-dashed border-fuchsia-700 rounded-2xl border-8 '>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
                    <img
                        src='../../../img/fondo.png'
                        alt="Arfan"
                        className="w-full md:w-6/12 rounded-lg object-cover"
                    />
                    <div className="w-full md:w-6/12">
                        <h1 className='text-3xl md:text-6xl text-black font-bold text-center'>🎁BONUS <span className='underline'>#2</span>🎁</h1>
                        <h2 className='text-3xl md:text-4xl text-black font-bold text-center py-2 md:py'><span className='underline'>Orden financiero</span> para emprendedores</h2>
                        <div className='mx-3 md:mx-0'>
                            <div className='flex gap-2 py-2 mb:py-2'>
                                <div>
                                    <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                </div>
                                <p className='text-2xl md:text-3xl text-black'>Aprende como ánalizar la situación financiera actual de tu negocio para la <span className='font-bold'>toma de decisiones informadas</span></p>
                            </div>
                            <div className='flex gap-2 py-2 mb:py-2'>
                                <div>
                                    <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                </div>
                                <p className='text-2xl md:text-3xl text-black'>Domina como <span className='font-bold'>reducir riesgos</span> para <span className='font-bold'>proteger tú negocio</span> de posibles crisis financieras</p>
                            </div>
                            <div className='flex gap-2 py-2 mb:py-2'>
                                <div>
                                    <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                </div>
                                <p className='text-2xl md:text-3xl text-black'>Aprende como <span className='font-bold'>optimizar recursos</span> y <span className='font-bold'>reducir costos</span> innecesarios de tú negocio</p>
                            </div>
                            <div className='flex gap-2 pb-4 mb:py-2'>
                                <div>
                                    <FaCheck className='text-purple-800 text-2xl align-middle mt-1' />
                                </div>
                                <p className='text-2xl md:text-3xl text-black'> Mejora tú capacidad para <span className='font-bold'>planificar</span> a largo plazo, establecer metas y evaluar el progreso hacia esas metas.</p>
                            </div>
                        </div>
                        <p className='bg-rose-200 font-bold text-center'>⚠️ UNA EMPRESA CON UN ORDEN FINANCIERO SÓLIDO ESTÁ MEJOR POSICIONADA PARA CRECER DE MANERA SOSTENIBLE Y RESISTIR CRISIS ECONÓMICAS ⚠️</p>
                        <p className='font-bold text-center text-4xl text-red-600'>Valorado en más de <span className='line-through text-red-600 '>$59 usd</span></p>
                        <p className='font-bold text-center text-5xl text-green-500'>Te lo llevas <span className='underline'>Gratis</span></p>
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Bonus