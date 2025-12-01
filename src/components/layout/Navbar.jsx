import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/src/assets/logo.png";
import {
  FaVideo, FaNetworkWired, FaCode, FaMicrophoneAlt,
  FaRobot, FaFileAlt, FaChartLine, FaLock, FaTachometerAlt, FaLayerGroup,
  FaBriefcase, FaBook, FaLaptopCode, FaQuestionCircle,
  FaBuilding, FaUsers, FaHandshake, FaIndustry, FaLightbulb, FaChevronDown
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "Home" },
    {
      label: "Solutions",
      icon: <FaRobot />,
      subMenu: [
        { path: "/solutions/chatbot-details", label: "AI Chatbots", icon: <FaRobot className="text-cyan-400" /> },
        { path: "/solutions/document-ai", label: "Document AI", icon: <FaFileAlt className="text-yellow-400" /> },
        { path: "/solutions/crm-lead-ai", label: "CRM & Lead AI", icon: <FaChartLine className="text-red-400" /> },
        { path: "/solutions/private-llm", label: "Private LLMs", icon: <FaLock className="text-indigo-400" /> },
        { path: "/solutions/dashboard", label: "Analytics Dashboard", icon: <FaTachometerAlt className="text-orange-400" /> },
        { path: "/industries", label: "Industries", icon: <FaIndustry className="text-slate-400" /> },
      ],
    },
    {
      label: "Services",
      icon: <FaLayerGroup />,
      subMenu: [
        { path: "/services/video-synthesis", label: "Video Synthesis", icon: <FaVideo className="text-purple-400" /> },
        { path: "/services/voice-cloning", label: "Voice Cloning", icon: <FaMicrophoneAlt className="text-pink-400" /> },
        { path: "/services/code-agents", label: "Code Agents", icon: <FaCode className="text-green-400" /> },
        { path: "/services/supply-chain", label: "Supply Chain AI", icon: <FaNetworkWired className="text-blue-400" /> },
      ],
    },
    {
      label: "Resources",
      icon: <FaBook />,
      subMenu: [
        { path: "/solutions/ai-showcase", label: "AI Showcase", icon: <FaLayerGroup className="text-teal-400" /> },
        { path: "/solutions/ai-demos", label: "Interactive Demos", icon: <FaLaptopCode className="text-fuchsia-400" /> },
        { path: "/solutions/case-studies", label: "Case Studies", icon: <FaBriefcase className="text-amber-400" /> },
        { path: "/solutions/portfolio", label: "Portfolio", icon: <FaLightbulb className="text-lime-400" /> },
        { path: "/faq", label: "FAQ", icon: <FaQuestionCircle className="text-sky-400" /> },
      ]
    },
    {
      label: "Company",
      icon: <FaBuilding />,
      subMenu: [
        { path: "/about", label: "About Us", icon: <FaBuilding className="text-gray-400" /> },
        { path: "/expertise", label: "Expertise", icon: <FaLightbulb className="text-yellow-200" /> },
        { path: "/careers", label: "Careers", icon: <FaUsers className="text-rose-400" /> },
        { path: "/partner", label: "Partner With Us", icon: <FaHandshake className="text-emerald-400" /> },
      ],
    },
  ];

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 h-20
        transition-all duration-300
        flex items-center
        ${isScrolled
          ? "bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0 group">
          <img
            src={logo}
            alt="Tfour Technologies Logo"
            className="h-10 group-hover:scale-105 transition-transform duration-300"
            style={{ filter: "url(#remove-black-bg)" }}
          />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex space-x-2 items-center h-full">
          {menuItems.map((item, index) =>
            !item.subMenu ? (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
                  ${location.pathname === item.path
                    ? "text-white bg-white/10 shadow-inner"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.label}
              </Link>
            ) : (
              <div
                key={index}
                className="relative flex items-center"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`
                    flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
                    ${openDropdown === item.label
                      ? "text-white bg-white/10 shadow-inner"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {item.label}
                  <FaChevronDown
                    className={`text-[10px] transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Enhanced Dropdown with AnimatePresence */}
                <AnimatePresence>
                  {item.subMenu && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)] w-64 z-50"
                    >
                      <div className="
                        rounded-xl 
                        bg-[#0b1221]/95 backdrop-blur-3xl 
                        border border-white/10 
                        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] 
                        overflow-hidden 
                        p-2
                        ring-1 ring-white/5
                      ">
                        {/* Decorative Gradient Blob */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

                        <div className="relative flex flex-col gap-0.5">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setOpenDropdown(null)}
                              className={`
                                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                                group/item
                                ${location.pathname === subItem.path
                                  ? "bg-blue-600/20 text-blue-400"
                                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                                }
                              `}
                            >
                              <span className="
                                flex items-center justify-center w-7 h-7 rounded-lg 
                                bg-white/5 border border-white/5 
                                group-hover/item:bg-white/10 group-hover/item:border-white/10 
                                group-hover/item:scale-105 transition-all duration-300
                                text-sm
                              ">
                                {subItem.icon}
                              </span>
                              <span className="font-medium text-sm tracking-wide">{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </div>

        {/* --- CONTACT BUTTON (DESKTOP) --- */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="
                ml-4 px-6 py-2.5 rounded-full font-bold text-sm
                bg-gradient-to-r from-blue-600 to-purple-600 text-white
                hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105
                transition-all duration-300
            "
          >
            Contact Us
          </Link>
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-2xl text-white hover:text-blue-400 transition-colors"
        >
          {isMobileMenuOpen ? "✕" : "≡"}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="
              lg:hidden fixed inset-x-0 top-20 z-40
              bg-[#0F172A]/95 backdrop-blur-xl
              border-t border-white/10
              overflow-hidden
              shadow-2xl
            "
          >
            <div className="p-4 space-y-6 max-h-[80vh] overflow-y-auto">
              {menuItems.map((item) =>
                item.subMenu ? (
                  <div key={item.label} className="space-y-2">
                    <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider px-2">{item.label}</h3>
                    <div className="grid grid-cols-1 gap-1 pl-2">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-lg opacity-70">{subItem.icon}</span>
                          <span className="text-sm font-medium">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-lg font-bold text-white p-2 hover:text-blue-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-4 pb-8">
                <Link
                  to="/contact"
                  className="block w-full py-3 text-center rounded-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
