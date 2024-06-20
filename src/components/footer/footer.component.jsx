import React from 'react';
import { footerData } from '../../footerData';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import "./footer.styles.css";

export default function Footer() {
    const { quickLinks, exploreShoprite, termsConditions, contactUs } = footerData;
    return (
      <>
        <footer className="footer-main">
        <div className="footer-section">
        <h4>QUICK LINKS</h4>
        <ul>
          {quickLinks.map((link, index) => (
            <li key={index}>
              <Link to="" className="footer-link">
              {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h4>EXPLORE SHOPRITE</h4>
        <ul>
          {exploreShoprite.map((link, index) => (
            <li key={index}>
             <Link to="" className="footer-link">
               {link}
             </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h4>TERMS & CONDITIONS</h4>
        <ul>
          {termsConditions.map((link, index) => (
            <li key={index}>
              <Link to="" className="footer-link">
              {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section contact-section">
        <h4>CONTACT US</h4>
        <p>Head Office:</p>
        <p>{contactUs.address}</p>
        <p>Telephone:</p>
        <p>{contactUs.telephone}</p>
         <div className="social-icons">
           <div className="icon-wrapper"><FaFacebook className="icon" /></div>
          <div className="icon-wrapper"><FaTwitter className="icon" /></div>
          <div className="icon-wrapper"><FaWhatsapp className="icon" /></div>
          <div className="icon-wrapper"><FaYoutube className="icon" /></div>
        </div>
      </div>
    </footer>
      </>
    );
}