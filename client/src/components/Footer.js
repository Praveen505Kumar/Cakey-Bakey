import { Link } from 'react-router-dom'
import logo from './images/logo.jpeg'
const Footer = () => {
  return (
    <div className="card-body p-5 text-center">
      <Link to="/" className="text-decoration-none navbar-brand ms-4">
        <img src={logo} alt="logo" height="80" width="80" className="rounded logo" />
      </Link>
      <p>1161/1, 1st Floor, JINAN Towers, 24th Cross, 24th
        Main Rd,
        2nd Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
      <div> Copyright &copy; 2022</div>
      <div>
        <a className="btn btn-social-icon btn-twitter">
          <span className="fa fa-twitter"></span>
        </a>
        <a className="btn btn-social-icon btn-facebook">
          <span className="fa fa-facebook"></span>
        </a>
        <a className="btn btn-social-icon btn-google">
          <span className="fa fa-google"></span>
        </a>
      </div>
    </div>
  )
}
export default Footer