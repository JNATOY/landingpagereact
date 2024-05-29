import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function scrollToSection(e, sectionId) {
    e.preventDefault(); // Evita el comportamiento de navegación predeterminado

    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

const Navbar = () => {
    const Links = [
        { name: '', link: '/d' },
        { name: 'Testimonios', link: 'testimonios' }, // Cambia la ruta
        { name: 'Bonus🎁', link: 'bonus' }, // Cambia la ruta
    ];

    let [isOpen, setisOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-black'>
                <Link to="/">
                    <div className='flex text-2xl cursor-pointer items-center gap-0' onClick={(e) => scrollToSection(e, 'inicio')}>
                        <img src='/src/assets/images/icontrans.png' className='w-12 h-12' alt="Logo" />
                        <span className='font-bold text-white'>PRODATE</span>
                    </div>
                </Link>
                <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                    {
                        isOpen ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='font font-semibold my-7 md:my-0 md:ml-8 text-white text-base'>
                                <a href={`#${link.link}`} className={`font-semibold transition-colors hover:text-purple-700`} onClick={(e) => scrollToSection(e, link.link)}>
                                    {link.name}
                                </a>
                            </li>
                        ))
                    }
                    <button className='btn bg-yellow-400 hover:scale-90 duration-500 text-black font-bold py-1 px-3 md:ml-8 rounded md:static' onClick={(e) => scrollToSection(e, 'producto')}>
                        Quiero Comprar
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;