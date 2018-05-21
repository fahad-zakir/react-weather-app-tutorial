import React, { Component } from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "94da788e62953643710eabd7b69152e4";

class App extends Component {
  getWeather = async (e) => {  
    //e is an event object and will prevent the page reload that's stopping the data
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=32836,us&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;