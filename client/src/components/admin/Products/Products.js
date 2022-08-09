import Dashboard from "../Dashboard";
import { Fragment, useEffect, useState } from "react";
import Item from "../../core/Item"
import axios from "axios";
import ProductFormAdd from "./ProductFormAdd";


const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get("http://localhost:8000/api/categories")
            .then(response => {
                setCategories(response.data);
                //console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <div>
            <Dashboard />
            <div class="header-pad adminscrn">
                <h1>Products</h1>
                <div class="d-flex justify-content-end p-2">
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i class="bi bi-plus"></i>
                        Add New
                    </button>
                </div>
                <div className="menu-line"></div>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Add Product</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ProductFormAdd />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="card cake-card me-2 my-3 shadow-sm" style={{ width: 230 }}>
               <div className="card-body ">
             <img className="card-img-top" src={img1} alt="no image"></img>
            <h5 className="card-title text-left">cake name</h5>
            <p className="card-text">This is a longer card with supporting.</p>
            <button  class="btn btn-success mx-3" > Add 
            </button>
            <button class="btn btn-danger ">
            <i class="fa fa-trash-o"></i> Delete
            </button>
            </div>
            
            </div>
            </div> */}
                <div className="row mt-1">
                    <div className="col-md-12 sample">

                        {categories && categories.map(category => {
                            return (
                                <Fragment>
                                    <div className="d-flex">
                                        <h2 className="">{category.name}</h2>
                                        <div className="cat-line flex-grow-1 my-auto ms-2"></div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        {products && products.filter(product => product.category.name === category.name).map((product, index) => {
                                            return (
                                                <Item name={product.name}
                                                    description={product.description}
                                                    price={product.price}
                                                    id={product._id}
                                                    key={product._id}
                                                    index={index}
                                                />
                                            )
                                        })}
                                    </div>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>







    );
}

export default Products;