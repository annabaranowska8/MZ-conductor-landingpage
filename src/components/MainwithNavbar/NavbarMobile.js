import React from "react";
import { NavHashLink } from "react-router-hash-link";

const NavbarMobile = ({ customClass }) => {
  return (
    <nav className={`navbar-mobile-hamburger ${customClass}`}>
      <ul>
        <li>
          <NavHashLink to="/#" activeClassName="selected" smooth>
            Home
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#concerts" activeClassName="selected" smooth>
            Concerts
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#biography" activeClassName="selected" smooth>
            Biography
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#gallery" activeClassName="selected" smooth>
            Gallery
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#contact" activeClassName="selected" smooth>
            Contact
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
