import React from "react";
import "./home.css";
import Header from "../header/index";
import Body from "../body/index";
import Admin from "./../admin/index";
import Footer from "../footer/index";
import { Route,  Routes } from 'react-router-dom';

function Home() {
  return ( <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <Body />
    </div>
    <div>
      <Routes>
        <Route path="/contact" component={Admin} />
      </Routes>
    </div>
    <div>
        <Footer />
    </div>
  </div>
  );
}

export default Home;