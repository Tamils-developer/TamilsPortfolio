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
            <a href="profile">
              {/* <Typography>Profile</Typography> */}
                Profile
            </a>
            <span></span>
          </li>
          <li className="__nav_items">
            <a href="about">About</a>
            <span></span>
          </li>
          <li className="__nav_items">
            <a href="skill">Skill</a>
            <span></span>
          </li>
          <li className="__nav_items">
            <a href="contact">Contact</a>
            <span></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
