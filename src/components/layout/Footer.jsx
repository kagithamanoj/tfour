import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import logo from "../../assets/logo.png"; // Replace with your transparent HD logo path

const Footer = () => (
  <footer
    className="
      bg-[var(--color-footer-header-bg)]
      text-[var(--color-footer-header-text)]
      border-t border-[var(--color-footer-header-border)]
      transition-colors duration-300
    "
  >
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src={logo} alt="Tfour Technologies Logo" className="h-8" />
          </Link>
          <p className="opacity-80 mb-3">
            Beyond Automation. True Intelligence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="
              text-lg font-semibold mb-4
              text-[var(--color-primary)]
            "
          >
            Quick Links
          </h3>
          <ul className="space-y-2 opacity-85">
            <li>
              <Link to="/about" className="hover:text-[var(--color-primary)] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-[var(--color-primary)] transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[var(--color-primary)] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[var(--color-primary)] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3
            className="
              text-lg font-semibold mb-4
              text-[var(--color-primary)]
            "
          >
            Legal
          </h3>
          <ul className="space-y-2 opacity-85">
            <li>
              <Link to="/privacy-policy" className="hover:text-[var(--color-primary)] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[var(--color-primary)] transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-[var(--color-primary)] transition">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3
            className="
              text-lg font-semibold mb-4
              text-[var(--color-primary)]
            "
          >
            Stay Connected
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="transition-colors duration-300"
          >
            <input
              type="email"
              placeholder="Your email"
              className="
                w-full px-4 py-2 rounded-lg mb-2
                bg-[var(--color-bg)]
                border border-[var(--color-footer-header-border)]
                text-[var(--color-footer-header-text)]
                focus:outline-none
                focus:ring-2 focus:ring-[var(--color-primary)]
              "
            />
            <button type="submit" className="btn-primary w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="
          mt-12 pt-8 flex flex-col sm:flex-row
          justify-between items-center
          border-t border-[var(--color-footer-header-border)]
        "
      >
        <p className="text-sm text-center sm:text-left opacity-70 mb-4 sm:mb-0 flex items-center gap-2">
          <span>
            © {new Date().getFullYear()} Tfour Technologies. All rights reserved. &nbsp;|&nbsp; 
          </span>
          <span
            className="px-3 py-1 rounded-md font-bold uppercase text-white"
            style={{
              background: '#174ea6',
              border: '2px solid #174ea6',
              fontSize: '0.92em',
              letterSpacing: '2px'
            }}
          >
            🇺🇸 Made in USA
          </span>
        </p>

        {/* Social Links */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://facebook.com"
            className="hover:text-[var(--color-primary)] transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/TfourTechnologies"
            className="hover:text-[var(--color-primary)] transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/tfourtechnologies/"
            className="hover:text-[var(--color-primary)] transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/tfourtechnologies/"
            className="hover:text-[var(--color-primary)] transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/TfourTechnologies"
            className="hover:text-[var(--color-primary)] transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
