import * as api from "./api/api";
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Home from "./components/Home";
function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.fetchCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
    []
  );


  return (
  <BrowserRouter>
    <Routes>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
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
