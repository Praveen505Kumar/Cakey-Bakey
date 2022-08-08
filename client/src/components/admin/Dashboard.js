import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
//import logo from "../images/logo.jpeg";
import Navbar from "../core/Navbar";

const Dashboard = () => {
    return (
        <Fragment>
            <Navbar />

            <div class="d-lg-block bg-black sidebar header-pad">
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
        </Fragment>
    );

}

export default Dashboard;