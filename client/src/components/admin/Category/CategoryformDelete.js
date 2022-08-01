import { useState } from 'react';
import axios from 'axios';

const CategoryformDelete = ({ categoryid, categoryname }) => {
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("sample"))
        axios.delete('http://localhost:8000/api/category/' + categoryid + '/' + user._id)
            .then(response => {
                console.log(response.data);
                window.location.reload();
            })
            .catch(error => {
                setError(error.response.data.error);
                console.log(error);
            })

    };
    return (
        <div>
            <form>
                <div className="row mb-3">
                    <p>Delete "{categoryname}"</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondory" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-danger" onClick={handleSubmit}>Delete</button>
                </div>
                {error && (<div className="alert alert-danger py-2" role="alert">
                    Error:{error}
                </div>)}
            </form>
        </div>
    );
}

export default CategoryformDelete;