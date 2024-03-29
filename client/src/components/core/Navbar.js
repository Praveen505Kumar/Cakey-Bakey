import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.jpeg";
import { connect } from "react-redux";

const Navbar = () => {
  let role = -1
  if (localStorage.getItem("sample") !== null) {
    const user = JSON.parse(localStorage.getItem("sample"))
    role = user.role
  }
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

          <NavLink to="/user/profile" className="nav-link" activeclassname="nav-link-active">
            Profile
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
    <div className="fixed-top header">
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="text-decoration-none navbar-brand ">
            <img src={logo} alt="logo" height="70" width="70" className="rounded logo" />
          </Link>
          <div className="ms-auto my-auto nav-container d-flex flex-md-row">
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