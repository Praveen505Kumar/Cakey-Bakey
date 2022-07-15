import * as api from "./api/api";
import './App.css';
import { useState, useEffect } from "react";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
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
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
        <Route path="/add-list" component={CreateTodo} />
      </BrowserRouter> */}
      <Home />
      <ul>{categories.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}</ul>
    </div>
  );
}

export default App;
