import { useState } from 'react';
import axios from 'axios';

const CategoryformEdit = ({ categoryid, categoryname }) => {
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value)
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("sample"))
        axios.put('http://localhost:8000/api/category/' + categoryid + '/' + user._id, { name })
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