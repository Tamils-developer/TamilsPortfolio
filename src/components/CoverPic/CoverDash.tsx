/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./CoverDash.css";

const CoverDash = () => {
  return (
    <div className="cover_dash_con">
      <figure className="cover_pic_con">
        <img className="cover_pic" src={require("./cover.jpeg")} />
        <figcaption className="__name_role_con">
          <h4 className="_name _cover_text">TAMILARASAN S</h4>
          <h4 className="_role _cover_text">FULL STACK SOFTWARE DEVELOPER</h4>
        </figcaption>
      </figure>
    </div>
  );
};

export default CoverDash;
