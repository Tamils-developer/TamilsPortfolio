/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Profile.css";
import profilepic from "../../Utils/profilePic.jpg";
import myinfo from "../../Utils/PersonalInfo";


const Profile = () => {


  // const pro = new IntersectionObserver();
  return (
    <div id="profile" className="_profile_con">
      <main className="pic_con">
        <div className="pro_pic_con">
          <img className="pro_pic" src={profilepic} />
        </div>
      </main>
      <main className="name_con">
        <div className="_name pro_text">
          <span className=" wel">Hello,</span>
          <span className="name">{`I'M ${myinfo.name.toLocaleUpperCase()}`}</span>
          <span className="role">{`${myinfo.role.toUpperCase()}`}</span>
          <button className="_btn ">
            <a href="#skill">VISIT MY PAGE</a>
          </button>
        </div>
        {/* <div className="_btn_con pro_text">
          <button className="_btn ">
            <a href="#skill">VISIT MY PAGE</a>
          </button>
        </div> */}
      </main>
    </div>
  );
};

export default Profile;
