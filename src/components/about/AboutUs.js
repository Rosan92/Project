import React from "react";
import us from "../../images/Car.jpeg";

const AboutUs = () => {
  return (
    <div className="row my-4">
      <h3 className="text-primary text-center my-4">About Us</h3>
      <article className="w-50 col text-danger font">
      <h5 className="col-md-6 card-title">We are for you</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <h5 className="card-title">Why we the best</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className="btn btn-outline-primary mx-4">Read More..</button>
      </article>
      <section className="w-50">
        <img src={us} alt="aboutus" className="w-100" />
      </section>
    </div>
  );
};

export default AboutUs;
