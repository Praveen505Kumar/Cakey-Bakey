import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const SigninForm = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        role: 0,
        error: "",
        success: false
    });

    const { email, password, error, success, role } = values;

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/signin', { email, password })
            .then(response => {
                setValues({ ...values, success: true, error: false, role: response.data.user.role });
            })
            .catch(error => {
                setValues({ ...values, error: error.response.data.message, success: false });
                console.log(error);

            })
    };
    return (
        <div className="header-pad">
            <div className="container py-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-8 col-md-4 col-lg-6 col-xl-5">
                        <div className="card-body p-5 text-center bg-light mx-5 rounded-3">
                            <form>
                                <h3>Sign In</h3>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="bi bi-envelope"></i>
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        required
                                        onChange={handleChange}
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
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                                <p className="forgot-password text-right">
                                    <Link to="/forgot" className="text-decoration-none">
                                        Forgot Password?
                                    </Link>
                                </p>
                                <p>Don't have an account?
                                    <Link to="/signup" className="text-decoration-none ms-2">SignUp here</Link>
                                </p>
                            </form>
                            {error && (<div className="alert alert-danger py-2" role="alert">
                                Error:{error}
                            </div>)}
                            {success && (role ? <Navigate to="/admin/home" /> : <Navigate to="/user/home" />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninForm;