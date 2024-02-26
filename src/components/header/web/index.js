import React from "react";
import './web.css';
import { Route,  Routes } from 'react-router-dom';
import Admin from "./../../admin/index";

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#bins" >
          <i class="fi-rr-edit-alt option-icon">
            
            </i>Find Bins
        </a>
    </div>
    <div className="web-option">
        <a href="/admin">
        <i class="fi-rr-laptop option-icon"></i>
        Administration
        </a>
    </div>
    <div className="web-option">
        <a href="/employeeportal">
        <i class="fi-rr-laptop option-icon"></i>
        Employee Portal
        </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>;
}

export default Web;