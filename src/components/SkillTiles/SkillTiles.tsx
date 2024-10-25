/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import React from "react";
import "./SkillTiles.css";
import "./bootstrap.png"
import  skillSet  from "./constant";

const SkillTiles = (props: any) => {
   




  return (
    <div>
      {skillSet.map((data, i) => (
        <div className="__box_cont">
          <section className={"__effect"} key={i}>
            <Box>
              <img src={require(`${data.image}`)}></img>
            </Box>
          </section>
        </div>
      ))}
    </div>
  );
};

export default SkillTiles;
