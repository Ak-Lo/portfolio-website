import React from "react";
import Footer from "../footer/Footer";
import { CiPhone } from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";
import { CiLocationOn, CiMail } from "react-icons/ci";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__content">
        <h3 className="contact__title">
          <div className="line__before"></div>
          Contact Me
        </h3>
        <div className="contact__send__email">
          <div className="contact__form">
            <input type="text" className="input__fields" placeholder="Phone" />
            <input type="text" className="input__fields" placeholder="Email" />
            <input
              type="text"
              className="input__fields"
              placeholder="Message"
            />
            <button className="contact__button">
              Send Message
              <AiOutlineSend fontSize={"20px"} />
            </button>
          </div>
          <div className="contact__middle__line"></div>
          <div className="contact__info">
            <div className="contact__details">
              <CiPhone fontSize="38px" color="FFE082" />
              <div className="__details">
                <h3>Phone</h3>
                <a href="tel:+995598184745">+995 598 18 47 45</a>
              </div>
            </div>
            <div className="contact__details">
              <CiMail fontSize="38px" color="FFE082" />
              <div className="__details">
                <h3>Email</h3>
                <span>akaki.lomia@kiu.edu.ge</span>
              </div>
            </div>
            <div className="contact__details">
              <CiLocationOn fontSize="38px" color="FFE082" />
              <div className="__details">
                <h3>Address</h3>
                <span style={{ fontWeight: "200" }}>
                  Vazha Pshavela Avenue, Block 5, Building 4.
                  <br />
                  Tbilisi, Georgia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
