import { useState } from "react";
import axios from "axios";

const UserFormAdd = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        address: "",
        password: "",
        error: "",
        success: false
    })
    const { name, email, address, password, error, success } = values;
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/signup', { email, name, address, password })
            .then(response => {
                setValues({ ...values, success: true, error: false });

            })
            .catch(error => {
                setValues({ ...values, error: error.response.data.error, success: false });
                console.log(error);
            })
    };

    return (
        <div>
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
                        required
                        onChange={handleChange}
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
                        required
                        onChange={handleChange}
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
                        Register
                    </button>
                </div>
                <p className="pt-2">Already registered?
                    <Link to="/signin" className="text-decoration-none navbar-brand ms-4">Signin</Link>
                </p>
                {error && (<div className="alert alert-danger py-2" role="alert">
                    Error:{error}
                </div>)}
            </form>

        </div>
    );
}

export default UserFormAdd;