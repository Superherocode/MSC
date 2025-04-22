import React from 'react';
import '../styles/Footer.css';
import { assets } from '../assets/assets';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo bên trái */}
        <div className="footer-logo-left">
          <img src={assets.iconmsc} alt="MSC Logo" className="footer-logo" />
        </div>

        {/* Phần giữa: socials + copyright */}
        <div className="footer-center">
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
              />
            </a>
            <a href="mailto:example@example.com" title="Email">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
                alt="Email"
              />
            </a>
          </div>

          <p className="footer-copy">&copy; 2025 MSC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
