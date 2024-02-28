import React from "react";
import "./logistics.css";
import About from "./../../body/about/index";
import Trucks from "./../trucks/index";
import AdminMap from "../map/index";

function Body() {
  return (
  <div className="body">

    <section id="bins">
      <Trucks />
    </section>
    <section id="map">
      <div className="map">
          <AdminMap />
      </div>
    </section>
  </div>
  );
}

export default Body;