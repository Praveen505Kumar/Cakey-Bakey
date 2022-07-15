
import { Link } from "react-router-dom";
import logo from "./images/logo.jpeg"

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light row">
        <div className="container">
          <Link to="/" className="text-decoration-none navbar-brand ms-4">
            <img src={logo} alt="logo" height="80" width="80" className="rounded logo" />
          </Link>
          <form className="d-flex nav-item col-sm-12 col-md-3">
            <input className="form-control rounded me-3" type="search" placeholder="Search Cakes" aria-label="Search"></input>
            <input type="button" value="Search" className="btn btn-outline-success"></input>
          </form>
          <div className="collapse navbar-collapse ms-5 col-sm-4 col-md-2">
            <ul className="navbar-nav me-auto  mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Custom Cakes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Birthday Cakes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Eggless Cakes</a>
              </li>
            </ul>
          </div>

          <div>
            <button className="btn btn-outline-success">
              <Link to="/signin" className="text-decoration-none">Signin</Link></button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Navbar