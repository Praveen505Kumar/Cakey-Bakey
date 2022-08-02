import Dashboard from "../Dashboard";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import Categoryform from "./CategoryformAdd"
import CategoryformDelete from "./CategoryformDelete";
import CategoryformEdit from "./CategoryformEdit";
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

            <div className=" header-pad">
                <Dashboard />
                <div className="col-md-11 adminscrn">
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
                                    <Categoryform />
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
                                {categories.map((category, index) => (
                                    <tr className="plain-table-row" key={category._id}>
                                        <td className="plain-table-cell">{index + 1}</td>
                                        <td className="plain-table-cell">{category.name}</td>
                                        <td className="plain-table-cell">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                            </div>
                                        </td>

                                        {/* <td className="plain-table-cell">
                                            
                                            <button className="btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target={"#staticBackdropedit" + index}>
                                                Edit
                                            </button>

                                            <div className="modal fade" id={"staticBackdropedit" + index} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="staticBackdropLabel">Update Category</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <CategoryformEdit categoryid={category._id} categoryname={category.name} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + index}>
                                                <i className="fa fa-trash-o"></i> Delete
                                            </button>

                                            <div className="modal fade" id={"staticBackdrop" + index} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="staticBackdropLabel">Are you sure?</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <CategoryformDelete categoryid={category._id} categoryname={category.name} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td> */}
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