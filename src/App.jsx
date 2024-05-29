import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Screens/AboutUs';
import ContactUs from "./Screens/ContactUs";
import HomeScreen from './Screens/HomeScreen';
// import GlobalApi from '../Services/GlobalApi'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path='/d' element={<AboutUs />} />
      <Route path='/contacto' element={<ContactUs />} />
    </Routes>
    //  <Hero />
    // <Search />
    // <IntroPost />
    // <Blogs />
    // <Faqs />
  );
}

export default App;
