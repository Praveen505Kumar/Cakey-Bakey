import { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios"
const CheckoutForm = () => {
    const [values, setValues] = useState({
        flatno: "",
        streetname: "",
        city: "",
        pincode: "",
        phoneno: "",
        state: "",
        error: "",
        success: false
    });

    const { flatno, streetname, city, pincode, phoneno, state, error, success } = values;
    const handleChange = (e) => {

        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handleCancel = (e) => {
        setValues({ ...values, success: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!flatno || !streetname || !city || !pincode || !phoneno || !state) {
            setValues({ ...values, error: "Please Fill All Fields!", success: false });
        } else {
            const user = JSON.parse(localStorage.getItem("sample"))
            axios.post('http://localhost:8000/api/address/create/' + user._id, { flatno, streetname, city, pincode, phoneno, userId: user._id, state })
                .then(response => {
                    setValues({ ...values, error: false, success: true });
                    console.log(response.data);
                })
                .catch(error => {
                    setValues({ ...values, error: error.response.data.error, success: false });
                    console.log(error);
                });
        }
    };

    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", " Goa", " Gujarat", " Haryana", "Himachal Pradesh"
        , "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", " Madhya Pradesh", "Maharashtra", "Manipu", "Meghalaya", "Mizoram", "Nagaland"
        , " Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "  Telangana", " Tripura", " Uttar Pradesh", " Uttarakhand", "West Bengal"];

    return (
        <div>
            <Navbar />
            <form className="header-pad col-sm-7 mx-auto">
                <h5 className="modal-title">Add Address</h5>

                <input name="flatno" type="text" placeholder="Building Number" className="input" required={true} onChange={handleChange}></input>
                <input name="streetname" type="text" placeholder="Street Name" className="input" required={true} onChange={handleChange}></input>
                <input name="city" type="text" placeholder="City" className=" input" required={true} onChange={handleChange}></input>
                <select name="state" className="input " required={true} onChange={handleChange}>
                    <option>Select</option>
                    {states.map((state, index) => (
                        <option value={state} key={index}>{state}</option>
                    ))}

                </select>
                <input name="phoneno" type="text" placeholder="Phoneno" className=" input" required={true} onChange={handleChange}></input>
                <input name="pincode" type="number" placeholder="Pincode" className="input" required={true} onChange={handleChange}></input>
                <div className="d-flex justify-content-end">
                    <span className=" Btn my-2 mr-2 ">
                        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </span>
                    <span className=" Btn my-2 ml-2 ">
                        <button className="btn btn-primary ms-4" onClick={handleSubmit} >Add</button>
                    </span>
                </div>
                {error && (<div className="alert alert-danger py-2" role="alert">
                    Error : {error}
                </div>)}
                {success && <Navigate to="/checkout" />}
            </form>
        </div>

    );
}
export default CheckoutForm;