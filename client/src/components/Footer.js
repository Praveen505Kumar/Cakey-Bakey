import React from 'react'
import logo from './images/logo.jpeg'
const Footer=()=>{
    return(
        <div class="card-body p-5 text-center">
            <a class="navbar-brand ms-4" href="#">
                <img src={logo} alt="logo" height="80" width="80" class="rounded logo"/></a>
    <p>1161/1, 1st Floor, JINAN Towers, 24th Cross, 24th
      Main Rd,
      2nd Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
    <div> Copyright &copy; 2022</div>
    <div>
      <a class="btn btn-social-icon btn-twitter">
        <span class="fa fa-twitter"></span>
      </a>
      <a class="btn btn-social-icon btn-facebook">
        <span class="fa fa-facebook"></span>
      </a>
      <a class="btn btn-social-icon btn-google">
        <span class="fa fa-google"></span>
      </a>
    </div>
        </div>
    )
}
export default Footer