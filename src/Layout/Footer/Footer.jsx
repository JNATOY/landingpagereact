import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    const Links = [
 
        {
            title: 'Social',
            links: [
                {
                    name: 'Instagram',
                    link: '#',
                },
                {
                    name: 'TikTok',
                    link: '#',
                },
                {
                    name: 'YouTube',
                    link: '#',
                },
                {
                    name: 'Twitter',
                    link: '#',
                },
            ],
        },
        {
            title: 'Compañia',
            links: [
                {
                    name: 'Contacto',
                    link: '/dashboard',
                },
                {
                    name: 'Sobre Mi',
                    link: '/favorite',
                },
                {
                    name: 'Plantillas',
                    link: '/profile',
                },
                {
                    name: 'Testimonios',
                    link: '/password',
                },
            ],
        },
    ];
    return (
        <div className="bg-dry py-4 bprder=t-2 border-black bg-black text-white">
            <div className="container mx-auto px-8 md:px-8">
                <div className=" text-center grid grid-cols-3 md:grid-cols-10 xl:grid-cols-10 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 md:py-12 justify-between ">
                    {Links.map((link, index) => (
                        <div
                            key={index}
                            className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
                        >
                            <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                                {link.title}
                            </h3>
                            <ul className="text-sm flex flex-col space-y-3">
                                {link.links.map((text, index) => (
                                    <li key={index} className="flex items-baseline">
                                        <Link
                                            to={text.link}
                                            className="text-border inline-block w-full hover:text-subMain"
                                        >
                                            {text.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="pb-6 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3 ">
                        <Link to="/">
                            <img
                                src="/src/assets/images/logo02.png"
                                alt="logo"
                                className="w-full md:w-2/4 object-contain "
                            />
                        </Link>
                        <p className="leading-7 text-sm text-border mt-3">
                            <span>Celular: +511 910841447</span>
                            <br />
                            <span>Email: info@prodate.com</span>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center'>Copyright &copy; 2023 Prodate. Todos los derechos reservados</p>
            </div>
        </div>

    );
}

export default Footer;