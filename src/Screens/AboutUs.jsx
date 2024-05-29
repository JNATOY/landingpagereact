import React from 'react'
import Layout from './../Layout/Layout';

function AboutUs() {
  const LinkPresupuesto = () => {
    // Abre la página en una nueva ventana o pestaña
    window.open("https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview", "_blank", 'noreferrer');
  };

  const LinkPlanificador = () => {
    // Abre la página en una nueva ventana o pestaña
    window.open("https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview", "_blank", 'noreferrer');
  };

  const VerTutorial = () => {
    // Abre la página en una nueva ventana o pestaña
    window.open("https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview", "_blank", 'noreferrer');
  };
  return (
    <Layout>
      <section>
        <br />
        <br />
        {/* <div className='md:col-span-8 flex flex-col items-center justify-center py-0 mb:py-12 text-black'>
          <br />
          <h3 className='text-2xl md:text-6xl text-black font-semibold py-5 text-center'>
            Si compras HOY, tendrás  <br />
            acceso <span className='text-purple-800 underline'>GRATUITO</span> a los siguientes <span className='text-purple-800 underline'>BONUS</span>
          </h3>
        </div> */}
        <div className='mt-9'>
          <div>
            <div className="flex flex-col items-center justify-center mx-full md:mx-full ">
              <img
                src='../../../img/graciasportucompra.png'
                alt="Arfan"
                className="w-full md:w-6/12 rounded-lg object-cover"
              />
              <div className="container mx-auto">
                <div>
                  <h3 className="text-xl lg:text-3xl mb-4 font-semibold text-center">
                    Gracias por comprar mis plantillas de <span className='text-subMain'>Presupuesto y planificador Avanzado</span>
                  </h3>
                  <div className="mt-3 text-sm leading-8 text-text text-center">
                    <p>
                      Aprecio su apoyo y confianza en mi trabajo. Al elegir esta plantilla, has dado un paso hacia una mejor organización de tus finanzas en tu vida personal o profesional. ¡También has apoyado el trabajo de un pequeño creador!
                    </p>
                    <div className="mx-auto text-center ">
                      <button
                        className="text-xl sm:text-xl lg:text-xl bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold w-auto sm:max-w-[600px] h-auto px-4 py-2 sm:px-6 sm:py-6 rounded-md bg-indigo-100 hover:scale-90 duration-500"
                        onClick={LinkPresupuesto}
                      >
                        Acceder a la plantilla de Presupuesto
                      </button>
                    </div>
                    <div className="text-center">
                      <p className='font-semibold text-blue-800 text-xl mt-3 text-center '>
                        <a href="https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview" target='_blank' rel='noreferrer'>
                          https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview
                        </a>
                      </p>
                    </div>
                    <br />
                    <div className="">
                      <button
                        className="text-xl sm:text-xl lg:text-xl bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold w-auto sm:max-w-[600px] h-auto px-4 py-2 sm:px-6 sm:py-6 rounded-md bg-indigo-100 hover:scale-90 duration-500 "
                        onClick={LinkPlanificador}
                      >
                        Acceder a la plantilla de Planificador
                      </button>
                    </div>
                    <div>
                      <p className='font-semibold text-blue-800 text-xl mt-3 text-center'>
                        <a href="https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview" target='_blank' rel='noreferrer'>
                          https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview
                        </a>
                      </p>
                    </div>
                    <br />
                    <p className='font-semibold'>
                      IMPORTANTE: Si te aparece algún ERROR al agregar la plantilla a tu Google Drive, es posible que tu papelera se encuentre llena. Borra toda la papelera de tu drive e intenta nuevamente.
                    </p>
                    <p>
                      Únicamente compatible con Google Sheets, no se garantiza el funcionamiento de todas las características en  Excel.
                    </p>
                    <div className="mx-auto text-center">
                      <div className="">
                        <button
                          className="text-xl sm:text-xl lg:text-xl bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold w-auto sm:max-w-[600px] h-auto px-4 py-2 sm:px-6 sm:py-6 rounded-md bg-indigo-100 hover:scale-90 duration-500 "
                          onClick={VerTutorial}
                        >
                          Ver Tutorial
                        </button>
                      </div>
                      <br />
                      <p className='font-semibold'>
                        Descargar manual de uso de las plantillas:
                      </p>
                      <div>
                        <p className='font-semibold text-blue-800 text-xl'>
                          <a href="https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview" target='_blank' rel='noreferrer'>
                            https://docs.google.com/spreadsheets/d/1SJp0mG2NZzFOOlCYs8hq9bkJR64MXdHNd2LK2MJTMTw/template/preview
                          </a>
                        </p>
                        <br />
                        <p className='text-2xl md:text-lg font-semibold my-2'>
                          Para facilitar tus primeros pasos, te ofrecemos una breve orientación sobre cómo aprovechar al máximo la plantilla:
                        </p>
                        <br />
                        <p className='text-xl md:text-lg my-2'>
                          <span className='font-semibold'>1. </span>Una vez hayas importado la plantilla, puedes personalizarla de acuerdo a tus preferencias. Siéntete libre de eliminar cualquier elemento que no necesites o incluso de modificar el diseño para que se adapte por completo a tus requisitos.
                        </p>
                        <br />
                        <p className='text-xl md:text-lg my-2'>
                          <span className='font-semibold'>2. </span> Si surgen preguntas o problemas, no dudes en ponerte en contacto conmigo a través de mi cuenta de Instagram @moneasycol. Estoy disponible para asistirte y asegurarme de que aproveches al máximo tu nueva plantilla.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" gap-6 mt-1 text-center items-center justify-center">
                    <div className="p-2 bg-dry rounded-lg">
                      <span className="text-6xl md:text-6xl block font-extrabold text-purple-600 ">+2152</span>
                      <h4 className="text-lg font-semibold my-2">Clientes compraron las plantillas y confian en todo el mundo</h4>
                      <p className="mb-0 text-text leading-7 text-sm">
                        Canales oficiales @plantillasvip en Instagram y TikTok
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section >
    </Layout>
  );
}

export default AboutUs;