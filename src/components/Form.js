import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather} className="theForm">
    <div className="inputAndLable">
      <label>Input City :</label>
      <input type="text" name="city" placeholder="City" />
    </div>
    <div className="inputAndLable">
      <label>Input Country</label>
      <input type="text" name="country" placeholder="Two Letter Country Abbreviation" />
    </div>
    <button className="btn colorTheButton">Get Weather</button>
  </form>
)

export default Form;