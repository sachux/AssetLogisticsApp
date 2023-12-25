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
      <h2> Create Request </h2>

      <div className='formContainer'>     
         <form>

          <p>Product Details</p>
          <hr></hr>
        <label>
          Brand:</label>
        <select value={brand} onChange={handlebrandChange}>
          <option value="Dell">Dell</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Apple">Apple</option>
          <option value="HP">HP</option>
        </select>

        <br />

        <label>
          Product:</label>
        <input type="text" value={product} onChange={handleproductChange} />

        <br />
        <br />


        <p>Issue/Request Details</p>
          <hr></hr>
        <label>
          Type:</label>
        <select value={type} onChange={handletypeChange}>
          <option value="Issue">Issue</option>
          <option value="Service Request">Service Request</option>
        </select>


        <br />


        <label>
          Title:</label>
        <input type="text" value={title} onChange={handletitleChange} />

        <br />


        <label>
          Description:</label>
        <input type="text" value={description} onChange={handledescriptionChange} />

        <br />

        <label>
          Priority:
        </label>

        <select value={priority} onChange={handlepriorityChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <br />
        <br />

        <p>User Details</p>
          <hr></hr>

          <label>
          Name and Address:
        </label>

        <textarea type="text" value={name} onChange={handlenameChange} />

        <br />
      </form>

      <input type="submit" value="Submit" onClick={handleSubmit} />

      </div>

      <br />
      <br />

    </>
  )
}

export default CreateForm;