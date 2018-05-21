import React, { Component } from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "94da788e62953643710eabd7b69152e4";

class App extends Component {
  getWeather = async () => {
    const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/weather?zip=32836,us&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;