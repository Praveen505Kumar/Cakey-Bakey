import React from "react";
import img5 from './images/seller1.webp';
import img6 from './images/seller2.webp';
import img7 from './images/seller3.webp'

const Bestsellers = () => {
  return (
    <div>
        <h1>Bestseller</h1>
      <div className="card-deck" >
       <div className="card  " >
        <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <img className="card-img-top" src={img5} alt="Card image cap"></img>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" className="card-link">Card link</a>
        <a className="card-link " href="#">card link</a>
       </div>
      </div>  
     <div className="card "  >
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <img className="card-img-top" src={img6} alt="Card image cap"></img>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" className="card-link">Card link</a>
        <a className="card-link " href="#">card link</a>
       </div>
     </div>
     <div className="card  ">
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <img className="card-img-top" src={img7} alt="Card image cap"></img>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" className="card-link">Card link</a>
        <a className="card-link " href="#">card link</a>
       </div>
     </div>
     </div>
     </div> 
  )
}
export default Bestsellers;

