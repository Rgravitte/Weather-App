import React from "react";

const Weather = props => (
  
  <div className="weatherCol">
        { props.city && props.country && <h4 className="weatherColHeader">{props.city}, {props.country}</h4>}
        { props.cit && props.country}<div className="weatherInfoDiv">
        { props.temperature && <p>Temperature: {props.temperature}</p>}
        { props.description && <p>Conditions: {props.description}</p>}
        { props.humidity && <p>Humidity: {props.humidity}</p>}
        { props.error && <p>{props.error}</p>}
      </div>
    </div>
);

export default Weather;