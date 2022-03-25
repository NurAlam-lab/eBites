import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Payment from "../../../assets/payment.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./footer.css";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


library.add(
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faFacebookF,
  faYoutube,
  faLinkedin
);
const Footer = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    borderBottom: "2px solid transparent",
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "inline-block",
  };
  return (
    <div className="footer ">
      <Container>
        <Row>
          <Col>
            <div className="">
              <h2 style={{ textAlign: 'left' }}>@eBites</h2>
            </div>
            <ul className="list-unstyled mt-3 w-100">
              <li style={{ textAlign: 'left' }} className="fs-3 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faMapMarkerAlt}

                />{" "}
                Kunming,Yunnan,China.
              </li>
              <li style={{ textAlign: 'left' }} className="fs-3 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faEnvelope}

                />{" "}
                Official: xiaoen20183290523@gmail.com
              </li>
              <li style={{ textAlign: 'left' }} className="fs-3 fw-bold mb-2 text-white">
                <FontAwesomeIcon className="me-2 social-icon" icon={faPhone} />{" "}
                Helpline: 13224025057(Available:10:00AM to 10.00PM)
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/contact">
                  Contact us
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/doctors">
                  Doctors
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/policy">
                  Policy
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <img className="img-fluid" src={Payment} alt="" />
          </Col>
        </Row>
        <div>
          <h2 className="text-white text-center">Follow Us</h2>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/sishirer.seshbindu.7/"
              >
                <FontAwesomeIcon
                  style={{ color: "#3b5998" }}
                  className="me-2 facebook social-icon"
                  icon={faFacebookF}
                />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=AACPaoDsd50"
              >
                <FontAwesomeIcon
                  className="me-2 youtube social-icon"
                  icon={faYoutube}
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <hr className="mt-2 mb-0 bg-white" />
      <div className="botton text-center">
        <h4>© 2022 eBites Theme by Goalthemes. All Rights Reserved.</h4>
      </div>
    </div >
  );
};

export default Footer;
