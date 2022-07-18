import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.jpeg'
const Footer = () => {
  return (
    <div className='bg-light'>
      <div className="container p-3 text-center">
        <div className='row mb-3'>
          <div className='company-info col-md-4'>
            <h2 className='text-start'>COMPANY</h2>
            <NavLink exact to="/about" className="nav-link" activeClassName="nav-link-active">
              ABOUT US
            </NavLink>
            <NavLink exact to="/faq" className="nav-link" activeClassName="nav-link-active">
              FAQ
            </NavLink>
            <NavLink exact to="/contact" className="nav-link" activeClassName="nav-link-active">
              CONTACT US
            </NavLink>
          </div>
          <div className='legal-info col-md-4'>
            <h2 className='text-start'>LEGAL</h2>
            <NavLink exact to="/terms-conditions" className="nav-link" activeClassName="nav-link-active">
              TERMS &amp; CONDITIONS
            </NavLink>
            <NavLink exact to="/privacy-policy" className="nav-link" activeClassName="nav-link-active">
              PRIVACY POLICY
            </NavLink>
            <NavLink exact to="/disclaimer" className="nav-link" activeClassName="nav-link-active">
              DISCLAIMER
            </NavLink>
          </div>
          <div className='social-links col-md-4'>
            <h2 className='text-start'>SOCIAL MEDIA</h2>
            <div className='d-flex justify-content-around'>
              <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><i class="bi bi-facebook" style={{ fontSize: 24 }}></i></a>
              <a href='https://www.twitter.com/' target="_blank" rel="noreferrer"><i class="bi bi-twitter" style={{ fontSize: 24 }}></i></a>
              <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><i class="bi bi-instagram" style={{ fontSize: 24 }}></i></a>
              <a href='https://www.youtube.com/' target="_blank" rel="noreferrer"><i class="bi bi-youtube" style={{ fontSize: 24 }}></i></a>
            </div>
          </div>
        </div>
        <Link to="/" className="text-decoration-none navbar-brand ms-4">
          <img src={logo} alt="logo" height="80" width="80" className="rounded logo" />
        </Link>
        <div className='fw-bold text-uppercase'> Copyright &copy; 2022 CAKEY BAKEY LTD. | ALL RIGHTS RESERVED</div>
      </div>
    </div>
  )
}
export default Footer