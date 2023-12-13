import React from "react";
import playstore from "../../images/playstore.png"
import appstore from "../../images/appstore.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="row p-4 bgm text-white">
        <div className="col">
          <h4>Info</h4>
          <li>FAQs</li>
          <li>Terms Conditions</li>
          <li>Refund Policy</li>
          <li>Privacy Policy</li>
        </div>
        <div className="col">
          <h4>Links</h4>
          <Link className="nav-link w-50" to='/'>Home</Link>
          <Link className="nav-link w-50" to='/about'>About Us</Link>
          <Link className="nav-link w-50" to='/services'>Services</Link>
          <Link className="nav-link w-50" >What's New</Link>
          <Link className="nav-link w-50" >Blog</Link>
        </div>
        <div className="col">
          <h4>Subscribe</h4>
          <input
            type="email"
            className="form-control  mb-2"
            id="exampleFormControlInput1"
            placeholder="Please Enter Mail Id"
          />
          <button
            type="submit"
            className="btn btn-outline-primary text-white"
            aria-label="Basic outlined example"
          >
            Subscribe
          </button>
          <div className="row py-2">
          <p className="font">Get the app...</p>
          <img src={playstore} alt="playstore" className="w-25 col" />
          <img src={appstore} alt="playstore" className="w-25 col" />
          </div>
        </div>
        <div className="col">
          <h4>Contact Us</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.701710493457!2d78.38604937394567!3d17.473985400307065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917e30ee0aa9%3A0x8482019e0bf26053!2sRubia%20Services!5e0!3m2!1sen!2sin!4v1702276662759!5m2!1sen!2sin"
            width="100%"
            height="50%%"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a className="bi bi-telephone-plus text-white"> 7893653899</a>
          <br />
          <a className="bi bi-envelope text-white"> info@rubiaservices.com</a>
        </div>
        <div className="d-flex justify-content-evenly mt-4">
          <div>
          <p>&copy;All right's are Reserved...</p>
          </div>
          <div>
            Connect Us By..
            <a className="bi-linkedin mx-1 text-white fs-5" />
            <a className="bi-twitter mx-1 text-white fs-5" />
            <a className="bi-instagram mx-1 text-white fs-5" />
            <a className="bi-youtube mx-1 text-white fs-5" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
