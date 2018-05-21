import React, { Component } from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "94da788e62953643710eabd7b69152e4";

// State changes the data to change based on interaction within a component, state is an object and it contains key value pairs
// in the state we will place data we need from the API, it's called intial state of the object and it's only gonna change once we press the button of the boject

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {  
    //e is an event object and will prevent the page reload that's stopping the data (default behavior); e.prevent signifies single page app
    e.preventDefault();
    // we created this city & country var to target the form city and change it's value ; we removed the default city and state 
    // from the api and set the props there as well with the $ sign
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature
    })
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