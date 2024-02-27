import React, { useState } from 'react';
import axios from "axios";
import "./form.css";


function CreateForm() {

  const [brand, setBrandValue] = useState('');
  const [product, setProductValue] = useState('');
  const [type, setTypeValue] = useState('');
  const [title, setTitleValue] = useState('');
  const [description, setDescValue] = useState('');
  const [priority, setPriorityValue] = useState('');
  const [name, setNameValue] = useState('');


  const handlebrandChange = (event) => {
    setBrandValue(event.target.value);
  };

  const handleproductChange = (event) => {
    setProductValue(event.target.value);
  };

  const handletypeChange = (event) => {
    setTypeValue(event.target.value);
  };

  const handletitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handledescriptionChange = (event) => {
    setDescValue(event.target.value);
  };

  const handlepriorityChange = (event) => {
    setPriorityValue(event.target.value);
  };

  const handlenameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const payload = {
      "serviceId": (type == 'Issue' ? "I" : "R") + new Date().getTime(),
      "title": title,
      "description": description,
      "type": type,
      "priority": priority,
      "brand": brand,
      "product": product,
      "userdetails": name
    }

    if(payload.title && payload.brand && payload.userdetails && payload.type && payload.priority){
      createRequest(payload);
    }else{
      alert("Please provide all mandatory fields")
    }
  };

  const createRequest = (request) => {
    console.log(JSON.stringify(request))
    axios.post('https://jakxwpcp84.execute-api.eu-north-1.amazonaws.com/prod/product', request).then(() => {
      window.location.reload(false);
    })
  }

  return (
    <>
      {/* <h2> Search: </h2>

      <div className='formContainer'>     
         <form>

        <label>
          Pincode:</label>
        <input type="text" value={product} onChange={handleproductChange} />
      
      <br/>
        <label>
          Type:
        </label>

        <select value={priority} onChange={handlepriorityChange}>
          <option value="High">All</option>
          <option value="Medium">Paper</option>
          <option value="Low">Plastic</option>
          <option value="Low">Glass</option>
          <option value="Low">Food Wasted</option>
        </select>

        <br />
        <br />
      </form>

      <input type="submit" value="Search" onClick={handleSubmit} />

      </div> */}

      <br />
      <br />

    </>
  )
}

export default CreateForm;