import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Slides from './Slides'
//import axios from 'axios';
const Home = () => {
    document.title = "cakeybakey.com";
    return (
        <div className="section">

            <Navbar />
            <Slides />
            <Footer />
        </div>
    )
}

export default Home;
