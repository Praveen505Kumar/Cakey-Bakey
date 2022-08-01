import axios from "axios";
import { useState, useEffect } from "react";
//import { NavLink } from 'react-router-dom';
// import UserFormAdd from './UserFormAdd';
import UserFormDelete from './UserFormDelete';
import UserformEdit from "./UserformEdit";

//import Navbar from "../../core/Navbar";

import Dashboard from "../Dashboard";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then((res) => {
                setUsers(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    },
        []
    );
    return (
        <div>

            <div className="header-pad">
                <Dashboard />
                <div className="col-md-11 adminscrn">
                    <h1>Users</h1>
                    {/* <div className="d-flex justify-content-end p-2">
                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i className="bi bi-plus"></i>
                            Add New
                        </button>
                    </div>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Add Category</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <UserFormAdd />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div>
                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th >Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr className="plain-table-row" key={user._id}>
                                        <td className="plain-table-cell">{index + 1}</td>
                                        <td className="plain-table-cell">{user.name}</td>
                                        <td className="plain-table-cell">{user.email}</td>
                                        <td className="plain-table-cell">
                                            {/* edit module */}
                                            <a className="btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target={"#staticBackdropedit" + index}>
                                                Edit
                                            </a>
                                            <div className="modal fade" id={"staticBackdropedit" + index} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="staticBackdropLabel">Update User</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <UserformEdit />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + index}>
                                                <i className="fa fa-trash-o"></i> Delete
                                            </button>
                                            {/* delete modal */}
                                            <div className="modal fade" id={"staticBackdrop" + index} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="staticBackdropLabel">Are you sure?</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <UserFormDelete userid={user._id} username={user.name} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;