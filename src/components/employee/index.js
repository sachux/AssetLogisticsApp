import React from "react";
import "./admin.css";
import Header from "../header/index";
import Footer from "../footer/index";
import TaskList from "./tasks/index";


function Employee() {
  return ( <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <TaskList />
    </div>
    <div>
        <Footer />
    </div>
  </div>
  );
}

export default Employee;