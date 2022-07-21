import Cart from "./Cart";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img1 from "../images/seller1.webp";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";


const Menu = () => {
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
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container header-pad">
                <h1>MENU</h1>
                <div className="menu-line"></div>
                <div className="row mt-4">
                    <div className="col-md-8 sample">
                        {categories && categories.map(category => {
                            return (
                                <Fragment>
                                    <div className="d-flex">
                                        <h2 className="">Best Sellers</h2>
                                        <div className="cat-line flex-grow-1 my-auto ms-2"></div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        {products && products.map(product => {
                                            return (
                                                <div className="card cake-card me-4 my-3" style={{ width: 250 }} key={product._id}>
                                                    <img src={img1} className="card-img-top" alt="..."></img>
                                                    <div className="card-body item-body rounded-3">
                                                        <h5 className="card-title">{product.name}</h5>
                                                        <p className="card-text text-muted">{product.description}</p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span>
                                                                <strong>&#8377;</strong> {product.price}
                                                            </span>
                                                            <div>
                                                                <button className="item-btn">
                                                                    <i className="bi bi-dash-lg"></i>
                                                                </button>
                                                                <span>
                                                                    <strong>0</strong>
                                                                </span>
                                                                <button className="item-btn">
                                                                    <i className="bi bi-plus-lg"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </Fragment>
                            );
                        })}
                    </div>
                    <div className="col-md-4">
                        <Cart />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;