import React from "react";
import auto from "../../images/Auto.jpeg"
import bike from "../../images/Bike.jpeg"
import driver from "../../images/Driver.jpeg"
import car from "../../images/Car.jpeg"
import jobportal from "../../images/Job Portal.jpeg"
import realestate from "../../images/RealEstate.jpeg"
import digitalmarketing from "../../images/DigitalMarketing.jpeg"
import software from "../../images/Software.jpeg"

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide container"
        data-bs-ride="carousel"
        style={{ paddingTop: '56px', }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={auto} className="d-block w-100 image-fluid" alt="auto" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={bike} className="d-block w-100 image-fluid" alt="bike" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={driver} className="d-block w-100 image-fluid" alt="driver" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={car} className="d-block w-100 image-fluid" alt="car" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={jobportal} className="d-block w-100 image-fluid" alt="jobportal" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={realestate} className="d-block w-100 image-fluid" alt="real estate" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={digitalmarketing} className="d-block w-100 image-fluid" alt="digitalmarketing" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={software} className="d-block w-100 image-fluid" alt="software" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
