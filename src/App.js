import React from "react";
import Home from "./components/home/index";
import Admin from "./components/admin/index";
import Employee from "./components/employee/index";
import { BrowserRouter as Router, 
  Routes,
  Route,
  Navigate, } from 'react-router-dom';

function App() {
  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
        <Routes>
            {/* This route is for home component 
  with exact path "/", in component props 
  we passes the imported component*/}
            <Route
                exact
                path="/"
                element={<Home />}
            />

            {/* This route is for about component 
  with exact path "/about", in component 
  props we passes the imported component*/}
            <Route
                path="/admin"
                element={<Admin />}
            />

            {/* This route is for about component 
  with exact path "/about", in component 
  props we passes the imported component*/}
            <Route
                path="/employeeportal"
                element={<Employee />}
            />


            {/* This route is for contactus component
  with exact path "/contactus", in 
  component props we passes the imported component*/}
            {/* <Route
                path="/contactus"
                element={<ContactUs />}
            /> */}

            {/* If any route mismatches the upper 
  route endpoints then, redirect triggers 
  and redirects app to home component with to="/" */}
            {/* <Redirect to="/" /> */}
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    </Router>
</>
  )
}

export default App
