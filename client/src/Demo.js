//import * as api from "./api/api";
//import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Home from "./components/Home";
function App() {



    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
        // <div className="App">

        //   <Home />
        //   <ul>{categories.map((item, index) => (
        //     <li key={index}>{item.name}</li>
        //   ))}</ul>
        // </div>
    );
}

export default App;
