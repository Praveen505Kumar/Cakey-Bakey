import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom"

const Categoryform = () => {
    const [values, setValues] = useState({
        name: "",
        error: "",
        success: false
    })
    const { name, error, success } = values;
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.post('http://localhost:8000/api/category/create/' + user._id, { name })
            .then(response => {
                setValues({ ...values, success: true, error: false });
                console.log(response.data)
            })
            .catch(error => {
                setValues({ ...values, error: error.response.data.error, success: false });
                console.log(error);
            })

    };

    return (
        <div>
            <form>
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">Category Name:</label>
                    <div class="col-sm-8">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Add new catogory"
                            required
                            onChange={handleChange}

                        />
                    </div>
                </div>
                {/* <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">Comments:</label>
                    <div class="col-sm-8">
                        <input
                            type="comments"
                            name="comments"
                            className="form-control"
                            placeholder="optional"

                        />
                    </div>
                </div> */}
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="submit" onClick={handleSubmit}
                        data-bs-dismiss={success ? "modal" : ""}
                        class="btn btn-success">Add</button>
                </div>
                {error && (<div className="alert alert-danger py-2" role="alert">
                    Error:{error}
                </div>)}
                {success && (<Navigate to="/category" />)}
            </form>

        </div>
    );
}

export default Categoryform;