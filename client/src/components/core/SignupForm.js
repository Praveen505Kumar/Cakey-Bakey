import { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        address: "",
        password: "",
        error: "",
        success: false
    })



    return (
        <div className="header-pad">
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-8 col-md-4 col-lg-6 col-xl-5">
                        <div className="card-body px-5 py-4 text-center bg-light mx-5 rounded-3">
                            <form>
                                <h3>Register Now!!</h3>
                                <div className="input-group my-3 ">
                                    <span className="input-group-text">
                                        <i className="bi bi-person"></i>
                                    </span>
                                    <input
                                        type="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="bi bi-envelope"></i>
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                    />
                                </div>
                                {/* <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="bi bi-phone"></i>
                                    </span>
                                    <input
                                        type="mobile"
                                        className="form-control"
                                        placeholder="Mobile number"
                                    />
                                </div> */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="bi bi-geo-alt"></i>
                                    </span>
                                    <input
                                        type="address"
                                        name="address"
                                        className="form-control"
                                        placeholder="Address"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="bi bi-lock"></i>
                                    </span>
                                    <input
                                        type="password"
                                        name="password"
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
    );
}

export default SignupForm;