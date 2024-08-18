import React, { useState } from "react";
import "./Header.css";
import { CiSearch, CiHeart } from "react-icons/ci";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiCompassRoseFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
const Header = ({ onSearch }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchQuery);
  };

  return (
    <>
      <header className="header">
        <div className="black-header">
          <div className="lorem">
            <p className="lorem-p">Lorem ipsum dolor</p>
          </div>
          <div className="lorem">
            <p className="lorem-p">Lorem ipsum dolor</p>
          </div>
          <div className="lorem">
            <p className="lorem-p">Lorem ipsum dolor</p>
          </div>

          <div className="lorem-1">Lorem ipsum dolor</div>
        </div>

        <div className="header-center">
          {open ? (
            <IoMdClose
              className="hamburger-close"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <GiHamburgerMenu
              className="hamburger-open"
              onClick={() => setOpen(!open)}
            />
          )}
          <div className="logo-img">
            <PiCompassRoseFill />
          </div>
          <div className="logo-name">LOGO</div>

          <div className="logo-search">
            <CiSearch className="header-btn" onClick={handleSearchSubmit} />
            <CiHeart className="header-btn" />
            <PiHandbagSimpleBold className="header-btn" />
            <IoPersonOutline className="header-btn hed" />
            <select className="hed">
              <option>ENG</option>
              <option>HINDI</option>
            </select>
          </div>
        </div>

        <div className={`header-type ${isMenuOpen ? "open" : ""}`}>
          <div className="header-name">SHOP</div>
          <div className="header-name">SKILLS</div>
          <div className="header-name">STORIES</div>
          <div className="header-name">ABOUT</div>
          <div className="header-name">CONTACT US</div>
        </div>

        {open ? (
          <div className="mobile-menu">
            <ul>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        ) : (
          <></>
        )}

        <br />
        <hr />
        <div className="opacityy">HOME | SHOP</div>
      </header>
    </>
  );
};

export default Header;
