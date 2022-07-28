import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.jpeg";
import { connect } from "react-redux";

const Navbar = ({ role }) => {
  const displayNav = () => {
    if (role === 1) {
      return (
        <Fragment>
          <NavLink to="/logout" className="nav-link" activeclassname="nav-link-active">
            Logout
          </NavLink>
        </Fragment>
      );
    } else if (role === 0) {
      return (
        <Fragment>
          <NavLink to="/" className="nav-link" activeclassname="nav-link-active">
            Home
          </NavLink>
          <NavLink to="/menu" className="nav-link" activeclassname="nav-link-active">
            Menu
          </NavLink>
          <NavLink to="/user/orders" className="nav-link" activeclassname="nav-link-active">
            Orders
          </NavLink>
          <NavLink to="/logout" className="nav-link" activeclassname="nav-link-active">
            Logout
          </NavLink>
        </Fragment>
      );
    } else if (role === -1) {
      return (
        <Fragment>
          <NavLink to="/" className="nav-link" activeclassname="nav-link-active">
            Home
          </NavLink>
          <NavLink to="/menu" className="nav-link" activeclassname="nav-link-active">
            Menu
          </NavLink>
          <NavLink to="/signin" className="nav-link" activeclassname="nav-link-active">
            Log In
          </NavLink>
          <NavLink to="/signup" className="nav-link" activeclassname="nav-link-active">
            Register
          </NavLink>
        </Fragment>
      );
    }
  };
  return (
    <div className="fixed-top bg-light">
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="text-decoration-none navbar-brand ms-4 ps-5">
            <img src={logo} alt="logo" height="70" width="70" className="rounded logo" />
          </Link>
          <div className="ms-auto my-auto nav-container d-flex flex-md-row">
            {/* <NavLink to="/" className="nav-link" activeclassname="nav-link-active">
              Home
            </NavLink>
            <NavLink to="/menu" className="nav-link" activeclassname="nav-link-active">
              Menu
            </NavLink> */}
            {displayNav()}
          </div>

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    role: state.status.role
  }
};



export default connect(mapStateToProps)(Navbar);