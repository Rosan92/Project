import React from "react";
import auto from "../../images/Auto.jpeg";
import bike from "../../images/Bike.jpeg";
import driver from "../../images/Driver.jpeg";
import car from "../../images/Car.jpeg";
import jobportal from "../../images/Job Portal.jpeg";
import realestate from "../../images/RealEstate.jpeg";
import digitalmarketing from "../../images/DigitalMarketing.jpeg";
import software from "../../images/Software.jpeg";

const Services = () => {
  return (
    <div className="text-primary">
      <h2 className="text-center">Welcome to Rubia Services</h2>
      <section className="py-2 mt-4 border">
        <div className="d-flex">
          <div className="w-25 text-center">
            <h4 className="col">Find a ride with Rubia</h4>
            <strong>Explore</strong>
          </div>
          <div className="d-flex w-75 row mx-2">
            <img
              src={bike}
              alt="bike"
              className="w-25 img-fluid rounded-end-pill"
            />
            <img src={car} alt="car" className="w-25 img-fluid rounded-start-pill" />
            <img src={auto} alt="auto" className="w-25 img-fluid rounded-end-pill" />
            <img
              src={driver}
              alt="auto"
              className="w-25 img-fluid rounded-start-pill"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="row row-cols-1 row-cols-sm-4 g-4 my-4">
          <div className="col">
            <div className="card text-primary">
              <img src={auto} className="card-img-top" alt="auto" />
              <div className="card-body">
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className="btn btn-primary align-center">Auto</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-primary">
              <img src={bike} className="card-img-top" alt="bike" />
              <div className="card-body">
                <h5 className="card-title">Bike</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-primary">
              <img src={driver} className="card-img-top" alt="driver" />
              <div className="card-body">
                <h5 className="card-title">Driver</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-primary">
              <img src={car} className="card-img-top" alt="car" />
              <div className="card-body">
                <h5 className="card-title">Car</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-4 g-4">
          <div className="col">
            <div className="card text-primary">
              <img src={jobportal} className="card-img-top" alt="jobportal" />
              <div className="card-body">
                <h5 className="card-title">Jobportal</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-primary">
              <img src={realestate} className="card-img-top" alt="realestate" />
              <div className="card-body">
                <h5 className="card-title">RealEstate</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-primary">
              <img
                src={digitalmarketing}
                className="card-img-top"
                alt="digitalmarketing"
              />
              <div className="card-body">
                <h5 className="card-title">DigitalMarketing</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-primary">
              <img src={software} className="card-img-top" alt="software" />
              <div className="card-body">
                <h5 className="card-title">Software</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center container mt-4 py-4 border bg-warning opacity-75">
        <h5>Upcoming Rubia Services</h5>
        <div className="d-flex">
          <img src={bike} alt="bike" className="w-25 rounded-end-pill" />
          <img src={car} alt="car" className="w-25 rounded-start-pill" />
          <img src={auto} alt="auto" className="w-25 rounded-end-pill" />
          <img src={driver} alt="auto" className="w-25 rounded-start-pill" />
        </div>
      </section>
    </div>
  );
};

export default Services;
