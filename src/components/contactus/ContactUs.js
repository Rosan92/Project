import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="my-4">
        <h2 className="text-primary text-center mb-4">
          Contact Us
        </h2>
        <form className="g-3 text-primary fs-5">
          <section className="row">
            <div className="col-md-6 p-2">
              <label htmlFor="autoSizingInput" className="form-label py-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name.."
                className="form-control"
                id="inputName"
              />
              <label htmlFor="inputEmail4" className="form-label py-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your mail id.."
                className="form-control"
                id="inputEmail4"
              />

              <label htmlFor="inputNumber" className="form-label py-2">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="Enter your number.."
                className="form-control"
                id="inputNumber"
              />
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label py-2"
              >
                Write Messege
              </label>
              <textarea
                className="form-control"
                rows="7"
                placeholder="Write your messege here.."
              ></textarea>
              <button type="submit" className="btn btn-primary w-25 m-4">
                Send
              </button>
            </div>
            <div className="p-2 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.701710493457!2d78.38604937394567!3d17.473985400307065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917e30ee0aa9%3A0x8482019e0bf26053!2sRubia%20Services!5e0!3m2!1sen!2sin!4v1702276662759!5m2!1sen!2sin"
                width="100%"
                height="84%"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
