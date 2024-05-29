import React from 'react';
import Hero from '../Components/Home/Hero';
import Layout from '../Layout/Layout';
import Faqs from '../Components/Home/Faqs';
import Testimonials from '../Components/Home/Testimonials';
import Bonus from '../Components/Home/Bonus';
import Carousel from '../Components/Home/Carousel';
import Price from '../Components/Home/Price';
import Infoproduct from '../Components/Home/Infoproduct';
import Clientes from '../Components/Home/Clientes';
import Pricedos from '../Components/Home/Pricedos';



function HomeScreen() {
    return (
        <Layout>
            <div className="">
                <Hero />
                <Infoproduct />
                <Clientes />
                <Price />
                <Bonus />
                <Testimonials />
                <Carousel />
                <Faqs />
                <Pricedos/>
            </div>
        </Layout>
    );
}

export default HomeScreen;