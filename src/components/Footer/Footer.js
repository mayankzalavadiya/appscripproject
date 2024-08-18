import React, { useState, useEffect } from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGooglePay } from "react-icons/fa";
import {
  FaCcMastercard,
  FaPaypal,
  FaApplePay,
  FaAmazonPay,
} from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  const [dropdowns, setDropdowns] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="footer">
      <div className="footer-main-top">
        <div className="left-footer">
          <div className="footer-any">
            <h1>BE THE FIRST TO KNOW</h1>
            <p>Sign up for updates from metta muse.</p>
            <div className="input-type">
              <input type="text" placeholder="Enter your e-mail..." />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <h3>CONTACT US</h3>
          <div className="contact">
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <h3>CURRENCY</h3>
          <p>USD</p>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className="footer-main-bottom">
        {isMobile ? (
          <>
            <div className="dropdown-container">
              <div
                className="dropdown-header"
                onClick={() => toggleDropdown("first")}
              >
                <h3>metta muse</h3>
                {dropdowns.first ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </div>
              {dropdowns.first && (
                <div className="dropdown-content">
                  <p>About Us</p>
                  <p>Stories</p>
                  <p>Artisans</p>
                  <p>Boutiques</p>
                  <p>Contact Us</p>
                  <p>EU Compliances Docs</p>
                </div>
              )}
            </div>

            <div className="dropdown-container">
              <div
                className="dropdown-header"
                onClick={() => toggleDropdown("second")}
              >
                <h3>Quick Links</h3>
                {dropdowns.second ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </div>
              {dropdowns.second && (
                <div className="dropdown-content">
                  <p>Orders & Shipping</p>
                  <p>Join/Login as a Seller</p>
                  <p>Payment & Pricing</p>
                  <p>Return & Refunds</p>
                  <p>FAQs</p>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                </div>
              )}
            </div>

            <div className="dropdown-container">
              <div
                className="dropdown-header"
                onClick={() => toggleDropdown("third")}
              >
                <h3>Follow us</h3>
                {dropdowns.third ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </div>
              {dropdowns.third && (
                <div className="dropdown-content">
                  <div className="link-insta">
                    <FaInstagram className="social" />
                    <CiLinkedin className="social" />
                  </div>
                  <h3>metta muse Accepts </h3>
                  <div className="payment">
                    <FaGooglePay className="pay" />
                    <FaCcMastercard className="pay" />
                    <FaPaypal className="pay" />
                    <LiaCcAmex className="pay" />
                    <FaApplePay className="pay" />
                    <FaAmazonPay className="pay" />
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="first">
              <h3>metta muse</h3>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>

            <div className="second">
              <h3>Quick Links</h3>
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>

            <div className="third">
              <h3>Follow us</h3>
              <div className="link-insta">
                <FaInstagram className="social" />
                <CiLinkedin className="social" />
              </div>
              <h3>metta muse Accepts </h3>
              <div className="payment">
                <FaGooglePay className="pay" />
                <FaCcMastercard className="pay" />
                <FaPaypal className="pay" />
                <LiaCcAmex className="pay" />
                <FaApplePay className="pay" />
                <FaAmazonPay className="pay" />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
