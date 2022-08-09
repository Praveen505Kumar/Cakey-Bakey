import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios"
const CheckoutFormUpdate = () => {
    const [values, setValues] = useState({
        flatno: "",
        streetname: "",
        city: "",
        pincode: "",
        phoneno: "",
        state: "",
        error: "",
        success: false
    })
    const { flatno, streetname, city, pincode, phoneno, state, error, success } = values;
    const handleChange = (e) => {

        setValues({ ...values, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.post('http://localhost:8000/api/address/update/' + user._id, { flatno, streetname, city, pincode, phoneno, userId: user._id, state })
            .then(response => {
                setValues({ ...values, error: false, success: true });
                console.log(response.data);

                // alert('category added!!');
            })
            .catch(error => {
                setValues({ ...values, error: error.response.data.error, success: false });
                console.log(error);
            })

    };
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.get('http://localhost:8000/api/address/' + user._id)
            .then((res) => {
                const address = res.data
                setValues({
                    ...values,
                    flatno: address.flatno,
                    streetname: address.streetname,
                    city: address.city,
                    pincode: address.pincode,
                    phoneno: address.phoneno,
                    state: address.state,

                    error: false

                });
                console.log(res.data)
            })
            .catch((err) => {
                setValues({
                    ...values,

                    error: err.response.data.error

                })
                console.log(err.message);
            });
    },
        []
    );




    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh"
        , "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland"
        , "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]
    const displayOptions = states.map((stat, index) => {

        if (stat === values.state) {

            return (<option value={stat} key={index} selected>{stat}</option>);
        }
        return (<option value={stat} key={index}>{stat}</option>);
    })
    return (
        <div>
            <Navbar />
            <form>

                <div class="header-pad col-sm-7 mx-auto ">
                    <h5 class="modal-title">Update Address</h5>
                    <input name="flatno" defaultValue={flatno} type="text" Placeholder="Building Number" className="input" required onChange={handleChange}></input>
                    <input name="streetname" defaultValue={streetname} type="text" Placeholder="Street Name" className="input" required onChange={handleChange}></input>
                    <input name="city" defaultValue={city} type="text" Placeholder="City" className=" input" required onChange={handleChange}></input>
                    <select name="state" className="input " required onChange={handleChange}>
                        <option>select</option>
                        {displayOptions}

                    </select>
                    <input name="phoneno" defaultValue={phoneno} type="text" Placeholder="Phoneno" className=" input" required onChange={handleChange}></input>
                    <input name="pincode" defaultValue={pincode} type="number" Placeholder="Pincode" className="input" requried onChange={handleChange}></input>
                    <div className="d-flex justify-content-end">
                        <span className=" Btn my-2 mr-2 ">
                            <button className="btn btn-secondary">Cancel</button>
                        </span>
                        <span className=" Btn my-2 ml-2 ">

                            <button className="btn btn-primary ms-4" onClick={handleSubmit} >Update</button>
                        </span>
                    </div>
                </div>

                {success && <Navigate to="/checkout" />}
            </form>
        </div>

    );
}
export default CheckoutFormUpdate;
