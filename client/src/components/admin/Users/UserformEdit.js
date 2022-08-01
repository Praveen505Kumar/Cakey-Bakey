import { useState } from 'react';
import axios from 'axios';

const UserformEdit = () => {
    const [values, setName] = useState("");
    const { name, email } = values;
    const handleChange = (e) => {
        setName(e.target.value)
    };
    const user = JSON.parse(localStorage.getItem("sample"))
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/user/' + user._id, { email, name })
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

                    <label className="col-sm-4 col-form-label">User Name:</label>
                    <div className="col-sm-8 my-2">
                        <input

                            type="text"
                            name="name"
                            className="form-control"
                            defaultValue={user.name}
                            required
                            onChange={handleChange}

                        />
                    </div>
                    <label className="col-sm-4 col-form-label">Email:</label>
                    <div className="col-sm-8 my-2">
                        <input

                            type="text"
                            name="name"
                            className="form-control"
                            defaultValue={user.email}
                            required
                        // onChange={handleChange}

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

export default UserformEdit;