import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-orange-500" : "text-white"}`
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-orange-500" : "text-white"}`
          }
        >
          SKILLS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-orange-500" : "text-white"}`
          }
        >
          PROJECTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-orange-500" : "text-white"}`
          }
        >
          CONTACT ME
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky bg-black bg-opacity-25 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for small screens */}
        <div className="dropdown relative">
          <button
            onClick={toggleMenu}
            className="btn btn-ghost lg:hidden focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <ul
            className={`menu menu-sm absolute mt-2 bg-black text-white rounded-box w-52 p-2 shadow-lg transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {navlinks}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="btn btn-ghost text-xl font-bold text-white no-underline"
        >
          Rahat Developer
        </Link>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a
          href="/path/to/cv"
          className="btn btn-outline border-orange-500 text-orange-500 no-underline mr-5"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
