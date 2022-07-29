import { useState } from "react";
import axios from "axios";

const Categoryform = () => {
    const [values, setValues] = useState({
        name: "",
        error: ""
    })
    const { name, error } = values;
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.post('http://localhost:8000/api/category/create/' + user._id, { name })
            .then(response => {
                setValues({ ...values, error: false });
                console.log(response.data);
                window.location.reload();
            })
            .catch(error => {
                setValues({ ...values, error: error.response.data.error });
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
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="submit" onClick={handleSubmit} className="btn btn-success">Add</button>
                </div>
                {error && (<div className="alert alert-danger py-2" role="alert">
                    Error:{error}
                </div>)}
            </form>

        </div>
    );
}

export default Categoryform;