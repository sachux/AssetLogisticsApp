import React from "react";
import "./admin.css";
import Header from "../header/index";
import Logistics from "./logistics/index";
import Footer from "../footer/index";
import TaskList from "./tasks/index";


function Home() {
  return ( <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <TaskList />
    </div>
    <div>
        <Logistics />
    </div>
    <div>
        <Footer />
    </div>
  </div>
  );
}

export default Home;