import { useState } from 'react';
import axios from 'axios';

const UserFormDelete = ({ userid, username }) => {
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/admin/' + userid)
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
                    <p>Delete {username}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Delete</button>
                </div>
                {error && (<div className="alert alert-danger py-2" role="alert">
                    Error:{error}
                </div>)}
            </form>
        </div>
    );
}

export default UserFormDelete;