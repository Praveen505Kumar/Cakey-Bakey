import { useState, useEffect } from "react";
import axios from "axios"
const CheckoutForm = () => {
    const [values, setValues] = useState({
        flatno: "",
        streetname: "",
        city: "",
        pincode: "",
        user: "",
        state: "",
        error: "",
        success: false
    })
    const { flatno, streetname, city, pincode, user, state, error, success } = values;
    const handleChange = (e) => {

        setValues({ ...values, [e.target.flatno]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.post('http://localhost:8000/api/address/create/' + user._id, { flatno, streetname, city, pincode, user, state })
            .then(response => {
                setValues({ ...values, error: false });
                console.log(response.data);
                // window.location.reload();
                // alert('category added!!');
            })
            .catch(error => {
                setValues({ ...values, error: error.response.data.error });
                console.log(error);
            })

    };
    // const [address, setAddress] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/address/:userId')
    //         .then((res) => {
    //             setAddress(res.data);
    //             console.log(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // },
    //     []
    // );

    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", " Goa", " Gujarat", " Haryana", "Himachal Pradesh"
        , "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", " Madhya Pradesh", "Maharashtra", "Manipu", "Meghalaya", "Mizoram", "Nagaland"
        , " Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "  Telangana", " Tripura", " Uttar Pradesh", " Uttarakhand", "West Bengal"]
    return (
        <div>
            <form>

                <div class="col-sm-7 mx-auto ">

                    <input name="flatno" type="text" Placeholder="Building Number" className="input" onChange={handleChange}></input>
                    <input name="streetname" type="text" Placeholder="Street Name" className="input" onChange={handleChange}></input>
                    <input name="city" type="text" Placeholder="City" className=" input" onChange={handleChange}></input>
                    <select name="state" className="input " onChange={handleChange}>
                        {states.map((state) => (
                            <option value={state}>{state}</option>
                        ))}

                    </select>
                    <input name="pincode" type="text" Placeholder="Pincode" className="input" onChange={handleChange}></input>
                    <div className="d-flex justify-content-end">
                        <span className=" Btn my-2 mr-2 ">
                            <button className="btn btn-secondary">Cancel</button>
                        </span>
                        <span className=" Btn my-2 ml-2 ">
                            <button className="btn btn-primary ms-4" onClick={handleSubmit} >Update</button>
                        </span>
                    </div>
                </div>


            </form>
        </div>

    );
}
export default CheckoutForm;