import Cart from "./Cart";
import Footer from "./Footer";
import Navbar from "./Navbar";

import axios from "axios";

import { Fragment, useEffect, useState } from "react";
import Item from "./Item";


const Menu = (props) => {
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
                                        <h2 className="">{category.name}</h2>
                                        <div className="cat-line flex-grow-1 my-auto ms-2"></div>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        {products && products.filter(product => product.category.name === category.name).map(product => {
                                            return (
                                                <Item name={product.name}
                                                    description={product.description}
                                                    price={product.price}
                                                    id={product._id}
                                                    key={product._id}
                                                />
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