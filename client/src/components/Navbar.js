import React, {Fragment} from "react"
import {NavLink} from "react-router-dom";
import logo from "./images/logo.jpeg"

const Navbar = ()=>{
    return(
        <div>
            <div className="navbar navbar-expand-lg navbar-light row">
                <div className="container">
                <a class="navbar-brand ms-4 col-sm-12 col-md-2 text-center" href="#">
                        <img src={logo} width="80" height="80" alt="logo" class="rounded logo"/>
                </a>
                <form class="d-flex nav-item col-sm-12 col-md-3">
                    <input class="form-control rounded me-3" type="search" placeholder="Search Cakes" aria-label="Search"></input>
                    <input type="button" value="Search" class="btn btn-outline-success"></input>
                </form>
                <div class="collapse navbar-collapse ms-5 col-sm-4 col-md-2">
        <ul class="navbar-nav me-auto  mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Custom Cakes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Birthday Cakes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Eggless Cakes</a>
          </li>
        </ul>
      </div>
      
      <div>
      <button class="btn btn-outline-success">
                        <NavLink to="/signin" class="text-decoration-none">Signin</NavLink></button>
                    </div>
      
                </div>
            </div>
        </div>
    )
}
export default Navbar