import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Slides from './Slides';
import Bestsellers from './Bestsellers'
//import axios from 'axios';
const Home = () => {
    document.title = "cakeybakey.com";
    return (
        <div className="section">

            <Navbar />
            <Slides />
            <Bestsellers/>
            <Footer />
        </div>
    )
}

export default Home;
