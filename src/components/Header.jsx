import React from "react";
import MainIcon from "../icons/mainIcon.svg";
function Header() {
  return (
    <div className="container">
      <header className="header">
        <img className="header__img" src={MainIcon} alt="main-icon" />
        <nav className="header__menu">
          <a href="#" className="header__menu__nav">
            Home
          </a>
          <a href="#" className="header__menu__nav">
            Episodes
          </a>
          <a href="#" className="header__menu__nav">
            About
          </a>
          <a href="#" className="header__menu__nav">
            Contact
          </a>
        </nav>
        <div className="header__burger">
          <span className="header__burger__span"></span>
        </div>
      </header>
    </div>
  );
}

export default Header;
