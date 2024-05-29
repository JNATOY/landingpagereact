import React from 'react';
import { accordions } from "../../Data/Faqsdata"
import Accordion from "../Accordion"

function Faqs() {
    return (
        <div className='wrapper mt-10 px-4 py-5 md:py-5 md:px-8'style={{ backgroundImage: 'url("https://i.postimg.cc/qRrrx1zJ/fondo4.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className='text-center text-3xl md:text-5xl font-semibold mb-10'>
            ¿Aún tienes dudas?
            </h1>
            <h2 className='text-center text-2xl md:text-4xl mb-10'>
            Es normal, estás a punto de hacer una inversión en ti que puede cambiar el rumbo de tu carrera profesional y estamos aquí para ayudarte. Aquí encontrarás algunas de las preguntas más comunes, que te ayudarán a tomar la mejor decisión.
            </h2>
            {/*main content here*/}
            <div className='max-w-[900px] w-full mx-auto mt-10'>
                {accordions.map((item, id) => {
                    // Destructurar el objeto 'item' en 'question' y 'answer'
                    const { question, answer } = item;

                    return (
                        <div className=' bg-stone-200 p-5 rounded-md my-2' key={id}>
                            {/* Pasar las propiedades correctas al componente Accordion */}
                            <Accordion question={question} answer={answer}></Accordion>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Faqs;