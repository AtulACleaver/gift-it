import React from "react";
import "../css/Main.css";
import "../css/Navbar.css";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            className="navbar-brand" target="_blank" rel="noreferrer"
            href="https://atulcleaver.wixsite.com/gift-it"
          >
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top navbar-logo"
            />
            Gift It<color>!</color>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="d-flex">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a target="_blank" rel="noreferrer" href="https://atulcleaver.wixsite.com/gift-it/" className="nav-list-item-link">
                  About Me
                </a>
              </li>
              <li className="nav-list-item">
                <a target="_blank" rel="noreferrer" href="https://atulcleaver.wixsite.com/gift-it/my-journey" className="nav-list-item-link">
                  My Journey
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
