import React from "react";
import Separator from "../../common/separator";
import  CreateForm  from "../form";

import "./bins.css";
function Bins() {
  const data=null;
  return (
    <div className="bins">
      <Separator />
      <label className="section-title">Find Bins</label>

      <div width="500px">
        <p>
         Search with you Pincode
        </p>
        
      </div>

      <CreateForm/>
    </div>
  );
}

export default Bins;