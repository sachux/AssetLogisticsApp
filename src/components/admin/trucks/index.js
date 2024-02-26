import React from "react";
import Separator from "../../common/separator";
import  CreateForm  from "../../body/form";

import "./trucks.css";
function Trucks() {
  const data=null;
  return (
    <div className="trucks">
      <Separator />
      <label className="section-title">Find Trucks</label>

      <div width="500px">
        <p>
         Search with you Pincode
        </p>
        
      </div>

      <CreateForm/>
    </div>
  );
}

export default Trucks;