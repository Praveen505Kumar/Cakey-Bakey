import React from "react";
import { Link } from "react-router-dom";


import Footer from "../components/Footer";

const Signin = () => {
  const signinForm = () => {
    return (
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-8 col-md-4 col-lg-6 col-xl-5">
            <div className="card-body p-5 text-center">

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
                  <Link to="/" className="text-decoration-none navbar-brand ms-4">
                    Forgot Password?
                  </Link>
                </p>
                <p>Don't have an account?
                  <Link to="/signup" className="link-info">SignUp here</Link>
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
      <Footer />
    </div>


  )
}

export default Signin;