import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links = [
        /* { name: 'Home', link: '/' }, */
        { name: 'Sobre mi', link: '/sobremi' },
        { name: 'Contacto', link: '/contacto' },
        { name: 'Descuentos🎁', link: '/descuentos' },
    ]

    let [isOpen, setisOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-black'>
                {/*logo here  */}
                <div className='flex text-2xl cursor-pointer items-center gap-0'>
                    <img src='/public/favicon02trans.png' className='w-12 h-12' />
                    <span className='font-bold text-white '>PRODATE</span>
                </div>

                {/*Menu Icon  */}
                <div onClick={()=> setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                    {
                        isOpen ? <XMarkIcon/>: <Bars3Icon/>
                    }
                </div>

                {/*nav links here  */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}
                `}>
                    {
                        Links.map((link,index) => (
                            <li key={index} className='font font-semibold my-7 md:my-0 md:ml-8 text-white text-base'>
                                <a href="/">{link.name}</a>
                            </li>))
                    }
                    <button className='btn bg-yellow-400 text-black font-bold py-1 px-3 md:ml-8 rounded md:static'>Quiero Comprar</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;