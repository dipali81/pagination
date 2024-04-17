import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'; // Import arrow icons
import { FiX, FiMenu } from 'react-icons/fi'; // Import icons from react-icons
import { FaUser  } from 'react-icons/fa'; 

// Dropdown component
const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <span
        onClick={handleToggle}
        className="text-white  cursor-pointer flex items-center"
      >
        {title} {isOpen ? <BsChevronUp /> : <BsChevronDown />}
      </span>
      {isOpen && (
        <div className="absolute top-full left-0 py-2 mt-1 ">
          {items.map((item, index) => (
            <div key={index} className="py-1 whitespace-nowrap text-white">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="py-4 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="w-[142px] h-[36.91px] mr-4" />
      </div>

      {/* Navigation Links */}
      <nav className={`flex font-bold space-x-4 md:space-x-6 ${isNavOpen ? 'flex-col' : 'hidden md:flex'}`}>
        <NavLink
          to="/"
          className={`text-white  ${activeLink === '' ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleLinkClick('')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`text-white  ${activeLink === 'about' ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleLinkClick('about')}
        >
          About
        </NavLink>

        <NavLink
          to="/data-catelogue"
          className={`text-white whitespace-nowrap  ${activeLink === 'data-catelogue' ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleLinkClick('data-catelogue')}
        >
          Data Catalogue
        </NavLink>
        <Dropdown
          title="Requests"
          items={['Data Upload', 'Advanced Analytics Environment']}
        />

        <Dropdown
          title="Products"
          items={['product 1']}
        />
        <Dropdown
          title="Help"
          items={['help']}
        />
      </nav>

      <div className="flex items-center">
          {/* <NavLink to="/" className="text-sm md:text-base underline font-semibold text-white mr-2">sign in</NavLink> */}
        <div className="ml-2 mr-4">
          <p className="text-sm md:text-base font-semibold whitespace-nowrap text-white">Hi, John</p>
        </div>
        <FaUser size={16} color="white " />
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden ml-2 focus:outline-none text-white"
        onClick={toggleNav}
      >
        {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {isNavOpen && (
        <div className="absolute top-full left-0 py-2 px-4 mt-1 rounded-md shadow-md flex flex-col w-full">
          <NavLink
            to="/"
            className="text-white  py-2"
            onClick={() => handleLinkClick('')}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-white  py-2"
            onClick={() => handleLinkClick('about')}
          >
            About
          </NavLink>
          <NavLink
            to="/data-catelogue"
            className="text-white  py-2"
            onClick={() => handleLinkClick('data-catelogue')}
          >
            Data Catalogue
          </NavLink>
          <Dropdown
            title="Requests"
            items={['Data Upload', 'Advanced Analytics Environment']}
          />

          <Dropdown
            title="Products"
            items={['product 1']}
          />
          <Dropdown
            title="Help"
            items={['help']}
          />
        </div>
      )}
    </header>
  );
};

export default Header;