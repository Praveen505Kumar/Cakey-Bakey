import { NavLink } from 'react-router-dom'
//import logo from "../images/logo.jpeg";
import Navbar from "../core/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            {/* <div className="fixed-top bg-light">
                <div className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <img src={logo} alt="logo" height="70" width="70" className="rounded logo" />

                        <div className="ms-auto my-auto nav-container d-flex flex-md-row">
                            <NavLink to="/logout" className="nav-link" activeclassname="nav-link-active">
                                Logout
                            </NavLink>

                        </div>

                    </div>
                </div>
            </div> */}

            <div class="d-lg-block bg-black sidebar header-pad">
                <ul class="list-unstyled ps-0">

                    <li class="mb-1">
                        <button class="btn d-inline-flex align-items-center rounded collapsed admincolap" data-bs-toggle="collapse" data-bs-target="#p-collapse">
                            Home
                        </button>
                        <div class="collapse" id="p-collapse">

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
                    </li>

                </ul>
            </div>
        </div>
    );

}

export default Dashboard;