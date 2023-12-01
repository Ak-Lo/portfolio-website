import React, { useRef, useState, useEffect } from "react";
import Footer from "../footer/Footer";
import { CiPhone } from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";
import { CiLocationOn, CiMail } from "react-icons/ci";
import "./contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageSent(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [messageSent]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3un6hu8",
        "template_ejonngw",
        form.current,
        "IlQu76dFLcu-ucTam"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="contact__content">
        <h3 className="contact__title">
          <div className="line__before"></div>
          Contact Me
        </h3>
        <div className="contact__send__email">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact__form">
              <input
                name="user_name"
                type="text"
                className="input__fields"
                placeholder="Name"
              />
              <input
                name="user_email"
                type="email"
                className="input__fields"
                placeholder="Email"
              />
              <textarea
                style={{ resize: "vertical" }}
                name="message"
                className="input__fields"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Message"
              />
              <button
                disabled={!message.length}
                type="submit"
                className="contact__button"
                value="Send"
              >
                Send Message
                <AiOutlineSend fontSize={"20px"} />
              </button>
              {messageSent ? (
                <div className="message__sent">
                  Your Message Has Been Sent!
                  <div className="message__sent__line"></div>
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
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
                  V. Pshavela Ave, Block 5, Bldg 4.
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
