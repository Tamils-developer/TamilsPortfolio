import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import SkillTiles from "../SkillTiles/SkillTiles";

const Dashboard = () => {

  // const [mySkills, SetMySkills] = useState([
  //   "JAVA","REACT","JAVASCRIPT","MYSQL","PL/SQL","HTML5","CSS3","BOOTSTRAP"
  // ])

  return (
    <div>
      <SkillTiles />

      {/* <Navbar/> */}
    </div>
  );
};

export default Dashboard;
