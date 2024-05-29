import React from 'react'

function Infoproduct() {
    return (
        <section className='px-4 md:px-8'>

            <div className='md:col-span-8 flex flex-col items-center justify-center py-10 text-black'>
                <h3 className='text-2xl md:text-6xl text-black font-semibold py-5 text-center'>
                    Si compras HOY, tendrás  <br />
                    acceso <span className='text-purple-800 underline'>GRATUITO</span> a los siguientes <span className='text-purple-800 underline'>BONUS</span>
                </h3>
            </div>
            <div>
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
                        <img
                            src='../../../img/presupuesto.png'
                            alt="Arfan"
                            className="w-full md:w-6/12 rounded-lg object-cover"
                        />
                        <div className="w-full md:w-6/12">
                            <h1 className='text-2xl md:text-6xl text-black font-bold text-center'>Presupuesto</h1>
                            <p className="text-2xl text md:text-2xl  text-black dark:text-black">
                                Descubra la plantilla de Google Sheets que combina simplicidad y flexibilidad para satisfacer las necesidades de todos. Si bien rastrear sus gastos diarios puede resultar tedioso, esta herramienta le brinda una visión nítida de su flujo de efectivo, ayudándole a identificar oportunidades de ahorro y, finalmente, a liberarse de sus deudas. ¡Empiece a tomar el control de sus finanzas hoy mismo!
                            </p>
                            <a
                                href="mailto:webcifar.com"
                                className="block mt-3 text-md md:text-lg text-black dark:text-black underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
                            >
                                webcifar@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5'></div>
            <div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
                    <div className="w-full md:w-6/12">
                        <h1 className='text-2xl md:text-7xl text-black font-bold text-center'>Planificador</h1>
                        <p className="text-2xl text md:text-2xl  text-black dark:text-black">
                            Optimiza tu productividad y alcanza tus metas con mi plantilla de organización mensual y semanal basada en la poderosa técnica de Time Blocking
                        </p>
                        <a
                            href="mailto:webcifar.com"
                            className="block mt-3 text-md md:text-lg text-black dark:text-black underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
                        >
                            webcifar@gmail.com
                        </a>
                    </div>
                    <img
                        src='../../../img/planificador.png'
                        alt="Arfan"
                        className="w-full md:w-6/12 rounded-lg object-cover"
                    />
                </div>
            </div>
        </section >
    );
}
export default Infoproduct