import React from "react";
import {NavLink} from "react-router-dom";


import Footer from "../components/Footer";

const Signup=()=>{
    const signupForm = () => {
        return (  
            <div className="container py-3 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-8 col-md-4 col-lg-6 col-xl-5">
                <div class="card-body p-5 text-center">
                    
            <form>
            <h3>Register Now!!</h3>
            <div className="mb-3">
          
          <input
            type="name"
            className="form-control"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          
          <input
            type="mobile"
            className="form-control"
            placeholder="mobile number"
          />
        </div>
        <div className="mb-3">
          
          <input
            type="adress"
            className="form-control"
            placeholder="Address"
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
            Register
          </button>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
       
        )
    }
    return (
        
            <div>
               
            {signupForm()}
            <Footer/>
            </div>
            
        
    )
}

export default Signup;