import React from "react";
import "./logistics.css";
import About from "./../../body/about/index";
import Trucks from "./../trucks/index";
import Map from "../map/index";

function Body() {
  return (
  <div className="body">

    <section id="bins">
      <Trucks />
    </section>
    <section id="map">
      <div className="map">
          <Map />
      </div>
    </section>
  </div>
  );
}

export default Body;