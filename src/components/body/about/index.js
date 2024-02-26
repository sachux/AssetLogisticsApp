import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
       Manage the waste bins and transport 
         <br /> <span className="info-name">Find a bin</span>.
         <br /> Responsible for a better tomorrow
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/bg.jpg")}
            className="picture"
          />
        </div>
      </div>
      
    </div>
  );
}

export default About;