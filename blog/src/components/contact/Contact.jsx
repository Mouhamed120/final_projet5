import React from "react";
import Header from "../header/Header";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container-contact">
        <div className="c-contact">
          <h3 className="c-title">Me contacter</h3>
          <div className="icons">
            <div className="info-contact">
              <i className="c-icon fas fa-phone"></i>
              <p>+221 77 611 26 15</p>
            </div>
          </div>
          <div className="icons">
            <div className="info-contact">
              <i className="c-icon fas fa-envelope"></i>
              <p>mouhamedndao120@gmail.com</p>
            </div>
          </div>
          <div className="icons">
            <div className="info-contact">
              <i className="c-icon fas fa-map-marker"></i>
              <p>Mobour Saly quartier Darou</p>
            </div>
          </div>
        </div>
        <div className="c-form">
          <h3 className="c-title">Send Me a message</h3>
          <form action="" method="get">
            <div className="c-group">
              <input
                type="text"
                placeholder="fullname..."
                className="c-input"
              />
            </div>
            <div className="c-group">
              <input type="email" placeholder="email..." className="c-input" />
            </div>
            <div className="c-group">
              <input
                type="text"
                placeholder="subject ..."
                className="c-input"
              />
            </div>
            <div className="">
              <textarea
                name=""
                id=""
                rows="5"
                className="c-textarea"
                placeholder="Enter your Message ...."
              ></textarea>
            </div>
            <button type="submit" style={{ color: "black" }}>
              Envoyer
            </button>
          </form>
        </div>
        <div className="c-googleMap">
          <h3 className="c-title">Google Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30910.58921451779!2d-16.978930291943378!3d14.437324337852294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec18a6823219bdd%3A0xcfbda4620ae6eeaa!2sAuchan%20Mbour!5e0!3m2!1sfr!2ssn!4v1647097908277!5m2!1sfr!2ssn"
            style={{
              width: "600px",
              height: "450px",
              border: "0px",
              allowfullscreen: "",
              loading: "lazy",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
