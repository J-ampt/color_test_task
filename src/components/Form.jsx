import React from "react";
import { useState } from "react/cjs/react.development";
import ResForm from "./ResForm";
import axios from "axios";

function Form(){


  const [state, setState] = useState({})
   
  async function respHandler(e){
    e.preventDefault();

    const formValues = {};
    const formData = new FormData(document.querySelector('form'))
    for (const pair of formData.entries()) {
      formValues[pair[0]] = pair[1];
    }
    const response = await axios({
      method: 'post',
      url: 'https://postman-echo.com/post/',
      data: formValues,
      headers: {'Access-Control-Allow-Origin': 'https://postman-echo.com'}
    })
    debugger;
  }




  return(
  <div>
    <form onSubmit={respHandler}>
      <div>
        <div className="form-row">
          <div className="form-group col-md-2">
            <label for="inputText">Name</label>
            <input type="text" name="Name" required className="form-control" id="inputText" placeholder="Name"/>
          </div>
          <div className="form-group col-md-2">
            <label for="inputTel">Telephone</label>
            <input type="number" required className="form-control" id="inputTel" placeholder="Tel"/>
          </div>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label" required for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" required type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
          <label className="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="form-group col-md-2">
          <label for="inputText">Favorite color</label>
          <select className="form-select" required aria-label="Default select">
          <option value="" disabled selected>Select your option</option>
            <option value="1">Red</option>
            <option value="2">Orange</option>
            <option value="3">Yellow</option>
            <option value="4">Green</option>
            <option value="5">Cyan</option>
            <option value="6">Blue</option>
            <option value="7">Violet</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>  
    </form>
    <div>
      <ResForm></ResForm>
    </div>
  </div>)
}

export default Form;