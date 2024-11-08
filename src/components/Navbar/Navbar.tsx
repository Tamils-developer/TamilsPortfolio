/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css"
import { Typography } from "@mui/material";

const Navbar = (props: any) => {
  return (
    <div className="__nav_container">
      <nav className="__nav_bar">
        <ul className="__nav_list">
          <li className="__nav_items">
            <a href="#profile">
                PROFILE
            </a>
            <span></span>
          </li>
          <li className="__nav_items">
            <a href="#about">ABOUT</a>
            <span></span>
          </li>
          <li className="__nav_items">
            <a href="#skill">SKILL</a>
            <span></span>
          </li>
          <li className="__nav_items">
            <a href="#contact">CONTACT</a>
            <span></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
