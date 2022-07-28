import { useState } from "react";
import axios from "axios";

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
        axios.post('http://localhost:8000/api/category/create/:userId', { name })
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
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label">Category Name:</label>
                    <div class="col-sm-8">
                        <input
                            type="name"
                            name="name"
                            className="form-control"
                            placeholder="Add new catogory"
                            required
                            onClick={handleChange}

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
                    <button type="submit" onClick={handleSubmit} class="btn btn-success">Add</button>
                </div>
            </form>

        </div>
    );
}

export default Categoryform;