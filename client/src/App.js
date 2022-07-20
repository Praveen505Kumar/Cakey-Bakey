import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/core/Home";
import Menu from "./components/core/Menu";
import Signup from "./components/core/Signup";
import Signin from "./components/core/Signin";
import Aboutus from "./components/about/Aboutus";
import Faq from "./components/about/Faq";
import Contactus from "./components/about/Contactus";
import Terms from "./components/about/Terms-conditions";
import Privacy from "./components/about/privacy-policy";
import Disclaimer from "./components/about/disclaimer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Terms-conditions" element={<Terms/>} />
        <Route path="/privacy-policy" element={<Privacy/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
