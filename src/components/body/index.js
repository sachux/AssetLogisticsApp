import React from "react";
import "./body.css";
import About from "./about/index";
import Bins from "./bins/index";
import RequestTable from "./requesttable/index";
import Contact from "./contact/index";
import Map from "../map/index";
import SimpleSlider from "./corousal/index";

function Body() {
  return (
  <div className="body">

    <section id="about">
      <About />
    </section>
    <section id="bins">
      <Bins />
    </section>
    <section id="skills">
      <RequestTable />
    </section>
    <section id="map">
      <div className="map">
          <Map />
      </div>
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;