// import Dashboard from "./Dashboard";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import CategoryForm from "./CategoryForm"
import { NavLink } from 'react-router-dom';
import Navbar from "../core/Navbar";
const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories')
            .then((res) => {
                setCategories(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    },
        []
    );

    return (
        <Fragment>
            <Navbar />
            <div className="row header-pad">
                <div className="col-md-2 d-lg-block bg-black  pe-3 pt-2">
                    <NavLink to="/userdetails" className=" nav-link link" >
                        Users
                    </NavLink>
                    <NavLink to="/category" className="nav-link link" activeclassname="nav-link-active">
                        Category
                    </NavLink>
                    <NavLink to="/products" className="nav-link link" activeclassname="nav-link-active">
                        Products
                    </NavLink>
                    <NavLink to="/orders" className="nav-link link" activeclassname="nav-link-active">
                        Orders
                    </NavLink>
                </div>
                <div className="col-md-10 adminscrn ps-5">
                    <h1>Category</h1>
                    <div className="d-flex justify-content-end p-2">
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
                                    <CategoryForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th>S.no</th>
                                    <th>Category Name</th>
                                    <th >actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((item, index) => (
                                    <tr className="plain-table-row" key={item._id}>
                                        <td className="plain-table-cell">{index + 1}</td>
                                        <td className="plain-table-cell">{item.name}</td>

                                        <td className="plain-table-cell">
                                            <a href="/edit" className="btn btn-secondary mx-2">
                                                Edit
                                            </a>
                                            <button className="btn btn-danger">
                                                <i className="fa fa-trash-o"></i> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Category;