import * as api from "./api/api";
import './App.css';
import { useState, useEffect } from "react";


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
      <ul>{categories.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}</ul>
    </div>
  );
}

export default App;
