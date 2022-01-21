import React from "react";

function Form(){

  return(<form action="https://postman-echo.com/post" method="post">
    <div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="inputText">Name</label>
          <input type="text" required class="form-control" id="inputText" placeholder="Name"/>
        </div>
        <div class="form-group col-md-2">
          <label for="inputTel">Telephone</label>
          <input type="number" required class="form-control" id="inputTel" placeholder="Tel"/>
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" required for="flexRadioDefault1">
          Male
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" required type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault2">
          Female
        </label>
      </div>
      <div className="form-group col-md-2">
        <label for="inputText">Favorite color</label>
        <select class="form-select" required aria-label="Default select">
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
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>  
  </form>)
}

export default Form;