import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/resources", label: "Resources" },
    {
      label: "Solutions",
      subMenu: [
        { path: "/solutions/dashboard", label: "Dashboard" }, // Added here!
        { path: "/solutions/services", label: "Services" },
        { path: "/solutions/portfolio", label: "Portfolio" },
        { path: "/solutions/case-studies", label: "Case Studies" },
        { path: "/solutions/ai-demos", label: "AI Demos" },
        { path: "/solutions/ai-showcase", label: "AI Showcase" },
      ],
    },
    {
      label: "About",
      subMenu: [
        { path: "/about", label: "About Us" },
        { path: "/expertise", label: "Expertise" },
        { path: "/industries", label: "Industries" },
        { path: "/partner", label: "Partner With Us" },
        { path: "/careers", label: "Careers" },
      ],
    },
    // Contact removed from main bar
    // { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-[var(--color-footer-header-bg)]
        text-[var(--color-footer-header-text)]
        border-b border-[var(--color-footer-header-border)]
        shadow-md
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src={logo} alt="Tfour Technologies Logo" className="h-10" />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex space-x-8 items-center h-full">
          {menuItems.map((item, index) =>
            !item.subMenu ? (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  transition-all duration-150 px-2 py-2 rounded
                  no-underline outline-none border-none focus:ring-0 bg-transparent
                  ${
                    location.pathname === item.path
                      ? "text-[var(--color-primary)] font-bold bg-[var(--color-footer-header-bg)] ring-2 ring-[var(--color-primary)]"
                      : "text-[var(--color-footer-header-text)] hover:text-[var(--color-primary)]"
                  }
                `}
                style={{
                  boxShadow: "none",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <div
                key={index}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`
                    flex items-center gap-1 px-2 h-full transition-colors duration-150
                    no-underline outline-none border-none focus:ring-0 bg-transparent
                    ${
                      openDropdown === item.label
                        ? "text-[var(--color-primary)] font-semibold"
                        : "hover:text-[var(--color-primary)] text-[var(--color-footer-header-text)] font-medium"
                    }
                  `}
                  style={{
                    boxShadow: "none",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                  <svg
                    className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                      openDropdown === item.label
                        ? "rotate-180 text-[var(--color-primary)]"
                        : "text-[var(--color-footer-header-text)]"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      filter: "drop-shadow(0 0 4px rgba(64,128,245,.12))",
                    }}
                  >
                    <polyline points="8 10 12 14 16 10" />
                  </svg>
                </button>
                {item.subMenu && openDropdown === item.label && (
                  <div
                    className="
                      absolute left-0 top-full w-56
                      rounded-xl shadow-2xl border border-[var(--color-footer-header-border)]
                      mt-0
                      bg-[var(--color-footer-header-bg)] bg-opacity-90
                      backdrop-blur-md
                      overflow-hidden
                      animate-fadeDown
                    "
                    style={{ minWidth: 210 }}
                  >
                    <div>
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setOpenDropdown(null)}
                          className={`
                            flex items-center gap-2 px-5 py-3 transition-all duration-150
                            text-[var(--color-footer-header-text)]
                            hover:text-[var(--color-primary)]
                            hover:bg-[var(--color-card)]
                            no-underline outline-none border-none focus:ring-0 bg-transparent
                            ${
                              location.pathname === subItem.path
                                ? "bg-[var(--color-card)] text-[var(--color-primary)] font-semibold"
                                : ""
                            }
                          `}
                          style={{
                            borderLeft:
                              location.pathname === subItem.path
                                ? "3px solid var(--color-primary)"
                                : "3px solid transparent",
                            textDecoration: "none",
                          }}
                        >
                          <span>{subItem.label}</span>
                          {location.pathname === subItem.path && (
                            <svg
                              className="ml-1 h-4 w-4 text-[var(--color-primary)]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* --- CONTACT BUTTON (DESKTOP) --- */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className={`ml-2 btn-primary glow text-[var(--color-footer-header-bg)] px-6 py-2`}
            style={{ minWidth: 120 }}
          >
            Contact
          </Link>
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="
            md:hidden text-3xl
            text-[var(--color-footer-header-text)]
            transition-colors
            hover:text-[var(--color-primary)]
          "
        >
          {isMobileMenuOpen ? "✕" : "≡"}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div
          className="
            md:hidden px-4 pb-4
            bg-[var(--color-footer-header-bg)]
            text-[var(--color-footer-header-text)]
            border-t border-[var(--color-footer-header-border)]
            transition-all duration-300
          "
        >
          {menuItems.map((item) =>
            item.subMenu ? (
              <div key={item.label} className="pb-2">
                <h3 className="py-2 font-semibold text-[var(--color-primary)]">{item.label}</h3>
                {item.subMenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className={`
                      block py-2 pl-4 rounded
                      hover:text-[var(--color-primary)] 
                      text-[var(--color-footer-header-text)]
                      no-underline outline-none border-none focus:ring-0 bg-transparent
                      ${
                        location.pathname === subItem.path
                          ? "bg-[var(--color-card)] text-[var(--color-primary)] font-semibold"
                          : ""
                      }
                      transition
                    `}
                    style={{
                      textDecoration: "none",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  block py-2 hover:text-[var(--color-primary)]
                  text-[var(--color-footer-header-text)]
                  no-underline outline-none border-none focus:ring-0 bg-transparent
                  ${
                    location.pathname === item.path ? "font-bold text-[var(--color-primary)]" : ""
                  }
                  transition
                `}
                style={{
                  textDecoration: "none",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="
              block py-2 mt-3 text-center rounded font-semibold
              btn-primary glow text-[var(--color-footer-header-bg)]
              transition
            "
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
