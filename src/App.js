import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "760387cf28a17bb93f87cf6aaca76809";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(city && country){
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })}else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please input a City and Country"
      })
    }
  }
  render(){
    return(
    <div>
      <div className="wrapper">
        <div className="main">

          <div className="container">
            <div className="row">
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
              <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 title-container">
              <Titles />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 form-container">
              <Form getWeather={this.getWeather} />
              <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
              </div>
              <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
