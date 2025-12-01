import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => (
  <footer
    className="
      bg-[#0F172A]
      text-gray-300
      border-t border-white/10
      transition-colors duration-300
    "
  >
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
        {/* Brand Section */}
        <div className="col-span-2 md:col-span-1 lg:col-span-1">
          <Link to="/" className="flex items-center mb-6">
            <img
              src={logo}
              alt="Tfour Technologies"
              className="h-12 w-auto mb-6 opacity-90"
              style={{ filter: "url(#remove-black-bg)" }}
            />
          </Link>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Pioneering the future of enterprise intelligence. We build AI agents that don't just automate—they innovate.
          </p>
          {/* Social Links */}
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" className="hover:text-blue-500 transition" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://x.com/TfourTechnologies" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/tfourtechnologies/" className="hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/tfourtechnologies/" className="hover:text-pink-500 transition" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://github.com/TfourTechnologies" className="hover:text-white transition" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-6">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/video-synthesis" className="hover:text-blue-400 transition">Video Synthesis</Link></li>
            <li><Link to="/services/supply-chain" className="hover:text-blue-400 transition">Supply Chain AI</Link></li>
            <li><Link to="/services/code-agents" className="hover:text-blue-400 transition">Code Agents</Link></li>
            <li><Link to="/services/voice-cloning" className="hover:text-blue-400 transition">Voice Cloning</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-bold mb-6">Solutions</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/solutions/chatbot-details" className="hover:text-blue-400 transition">AI Chatbots</Link></li>
            <li><Link to="/solutions/document-ai" className="hover:text-blue-400 transition">Document AI</Link></li>
            <li><Link to="/solutions/crm-lead-ai" className="hover:text-blue-400 transition">CRM & Lead AI</Link></li>
            <li><Link to="/solutions/private-llm" className="hover:text-blue-400 transition">Private LLMs</Link></li>
            <li><Link to="/solutions/dashboard" className="hover:text-blue-400 transition">Client Dashboard</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
            <li><Link to="/partner" className="hover:text-blue-400 transition">Partners</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal & Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-6">Legal</h3>
          <ul className="space-y-3 text-sm mb-8">
            <li><Link to="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-400 transition">Terms of Service</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-blue-400 transition">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tfour Technologies. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">Proudly</span>
          <span
            className="px-3 py-1 rounded-md font-bold uppercase text-white text-xs tracking-widest"
            style={{
              background: '#174ea6',
              border: '1px solid #174ea6',
            }}
          >
            🇺🇸 Made in USA
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
