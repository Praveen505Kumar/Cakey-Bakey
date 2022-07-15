 import React from "react";
import {NavLink} from "react-router-dom";


import Footer from "../components/Footer";

const Signin=()=>{
    const signinForm = () => {
        return (  
            <div className="container py-3 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-8 col-md-4 col-lg-6 col-xl-5">
                <div class="card-body p-5 text-center">
                    
            <form>
            <h3>Sign In</h3>
        <div className="mb-3">
          
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
    
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p>Don't have an account? 
            <NavLink to="/signup" class="link-info">SignUp here</NavLink>
            </p>
        </form>
        </div>
        </div>
        </div>
        </div>
       
        )
    }
    return (
        
            <div>
               
            {signinForm()}
            <Footer/>
            </div>
            
        
    )
}

export default Signin;