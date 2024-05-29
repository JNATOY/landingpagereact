import React from 'react'
import Footer from './Footer/Footer';
import Navbar from './NavBar/NavBar';

function Layout({ children }) {
    return (
        <>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout;