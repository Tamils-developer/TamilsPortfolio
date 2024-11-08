import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import SkillTiles from "../SkillTiles/SkillTiles";
import CoverDash from "../CoverPic/CoverDash";
import Profile from "../ProfileComp/Profile";
import Contact from "../Contact/Contact";
import About from "../About/About";

const Dashboard = () => {
  return (
    <div className="gird_container">
      {/* <CoverDash /> */}
      <Profile/>
      {/* <SkillTiles /> */}
      <About/>
      {/* <Contact/> */}
    </div>
  );
};

export default Dashboard;
