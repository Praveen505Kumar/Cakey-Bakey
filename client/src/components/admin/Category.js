import Dashboard from "./Dashboard";
import Categoryform from "./Categoryform"
//import { NavLink } from 'react-router-dom'
const Category = () => {
    return (
        <div>
            <Dashboard />
            <div class="header-pad adminscrn">
                <h1>Category</h1>


                <div class="d-flex justify-content-end p-2">
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i class="bi bi-plus"></i>
                        Add New
                    </button>
                </div>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Add Category</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Categoryform />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <table class="table">
                        <thead>
                            <tr className="">
                                <th>S.no</th>
                                <th>Category Name</th>
                                <th >actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="plain-table-row ">
                                <td class="plain-table-cell">1</td>
                                <td class="plain-table-cell">Eggless cakes</td>

                                <td class="plain-table-cell">
                                    <a href="/edit" class="btn btn-secondary mx-2">
                                        Edit
                                    </a>
                                    <button class="btn btn-danger">
                                        <i class="fa fa-trash-o"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Category;