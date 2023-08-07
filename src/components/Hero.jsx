import React from 'react';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-8 h-[90vh]'>
      {/* Nueva fila */}
      <div className='md:col-span-8 flex items-center justify-center h-1/12'>
        <p className='text-center text-xl'>Encabezado</p>
      </div>

      {/* Primera columna */}
      <div className='bg-red-400 md:col-span-5 flex items-center justify-center'>
        <h1>Video</h1>
      </div>

      {/* Segunda columna */}
      <div className='bg-red-600 md:col-span-3'>
        <h1 className='text-7xl font-bold '>Beneficios del producto</h1>
      </div>
    </section>
  );
}

export default Hero;