import { useState } from 'react';
import axios from 'axios';

const CategoryformEdit = ({ categoryid, categoryname, isEnable }) => {
    const [values, setValues] = useState({
        name: categoryname,
        isEnabled: isEnable
    });
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        console.log(e.target)
    };
    const handleRadioChange = (e) => {
        setValues({ ...values, isEnabled: e.currentTarget.value === "enabled" ? true : false })
        console.log(e.currentTarget)
    };


    const handleUpdate = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("sample"))
        axios.put('http://localhost:8000/api/category/' + categoryid + '/' + user._id, { name: values.name, isEnabled: values.isEnabled })
            .then(response => {
                console.log(response.data);
                // alert('category deleted!!');
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            })

    };
    return (
        <div>
            <form>
                <div className="row mb-3">

                    <label className="col-sm-4 col-form-label">Category Name:</label>
                    <div className="col-sm-8">
                        <input

                            type="text"
                            name="name"
                            className="form-control"
                            defaultValue={categoryname}
                            required
                            onChange={handleChange}

                        />
                    </div>
                    <label className="col-sm-4 col-form-label py-2">Enable:</label>
                    <div className="col-sm-8 py-2">
                        <form >
                            <div className="col-12 mt-2">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="enabled" value="enabled" onChange={handleRadioChange} ></input>
                                    <label className="form-check-label" for="CashOnDelivery">enable</label>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="enabled" value="disabled" onChange={handleRadioChange} ></input>
                                    <label className="form-check-label" for="disable" >disable</label>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" onClick={handleUpdate} className="btn btn-success" >Update</button>
                </div>

            </form>
        </div>
    );
}

export default CategoryformEdit;