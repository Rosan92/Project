import React from "react";
import logo from "../../images/logo1.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* <nav className="navbar navbar-expand-sm fixed-top opacity-75 bgm"> */}
      <nav className="navbar navbar-expand-md fixed-top bgm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" style={{width:'65px'}} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 font">
              <li className="nav-item">
                <Link className="nav-link text-white text-bold" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-bold" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-bold" to='/about'>
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-bold" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-bold" href="#">
                  Blog
                </a>
              </li>
            </ul>
            {/* <form role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}
                <button className="btn btn-outline-primary text-white" href="#">
                  Signup
                </button>
                
              <a className="bi bi-search text-primary fs-4 mx-2" type="submit" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
