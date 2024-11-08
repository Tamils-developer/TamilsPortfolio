import React from "react";
import "./Contact.css";
import myinfo from "../../Utils/PersonalInfo";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const { address, mobile, instagram, linkedin, email, github } = myinfo;

  const handleClick = (e: any) => {
    console.log(e);
  };

  return (
    <div id="contact" className="contact_con">
      <main className="contact_main">
        <section className="content top_content">REACHOUT TO ME </section>
        <section className="content btm_content">FOR INQUIRIES</section>

        <section className="content mid_content">
          <div className="__dets">
            <div className="address _details">
              <p>
                <b>VISIT ME</b>:<br /> <address>{ address}.</address>
              </p>
            </div>
            <div className="phone _details">
              <p>
                <b>CALL ME</b>:<br />
                <a
                  href={`tel:${mobile}`}
                  style={{ color: "black" }}
                  title="mob"
                  onClick={(e) => handleClick(e)}
                >
                  {mobile}
                </a>
              </p>
            </div>
            <div className="email _details">
              <p>
                <b>MAIL ME</b>:<br />
                <a href={`mailto:${email}`} style={{ color: "black" }}>
                  {email}
                </a>
              </p>
            </div>
          </div>
          <div className="cont_">
            <div className="instagram _icon_con" title="Instagram">
              <a href={`${instagram}`}>
                <InstagramIcon
                  className="_icon"
                  sx={{ fontSize: "4em", color: "black" }}
                />
              </a>
            </div>
            <div className="linkedin _icon_con" title="Linkedin">
              <a href={`${linkedin}`}>
                <LinkedInIcon
                  className="_icon"
                  sx={{ fontSize: "4em", color: "black" }}
                />
              </a>
            </div>
            <div className="github _icon_con" title="Github">
              <a href={`${github}`}>
                <GitHubIcon
                  className="_icon"
                  sx={{ fontSize: "4em", color: "black" }}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
