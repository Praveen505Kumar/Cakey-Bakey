import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Signup = () => {
    const signupForm = () => {
      return (
        <div class="header-pad">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-8 col-md-4 col-lg-6 col-xl-5">
              <div className="card-body p-5 text-center bg-light">
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
                  <p className="pt-2">Already registered?
                      <Link to="/signin" className="text-decoration-none navbar-brand ms-4">Signin</Link>
                    </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
  
      )
    }
    return (
  
      <div>
        <Navbar/>
        {signupForm()}
        <Footer />
      </div>
  
  
    )
  }
  

export default Signup;