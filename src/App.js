import React, { Component } from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "94da788e62953643710eabd7b69152e4";

// State changes the data to change based on interaction within a component, state is an object and it contains key value pairs
// in the state we will place data we need from the API, it's called intial state of the object and it's only gonna change once we press the button of the boject

// on the weather component if you try to click the weather button without filling in the form, you get errors
// it is due to these properties below being undefined and then we are trying to fetch (this.) the data when we don't have any and it's not going to know what we are trying to get from the api.
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
    //e is an event object and will prevent the page reload that's stopping the data (default behavior); e.prevent signifies single page app what React is all about
    e.preventDefault();
    // we created this city & country var to target the form city and change it's value ; we removed the default city and state 
    // from the api and set the props there as well with the $ sign

    // e.target is for the argument of the event handler in the form, events are objects with certain properties
    // e.target almost always represents a DOM element.
    // Thus e.target.value is the value property of some DOM element, in this case that means the text entered in the search input.
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    // we have stored the api_call in the data variable since we also want to convert it to a json
    // if statement is to check if city value's return true then do this, if it's false then code below will not work. (this is for the blank form and submit)
    // if it works then we want the code to work else 
    if (city && country) {
    console.log(data);
    this.setState({
      // this is so we can change this manipulate data below (change the state), we got the intial state (data) from the api
      // it came in the json called as it is below 
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  
} else {
      this.setState({
        // this is so we can change this manipulate data below (change the state), we got the intial state (data) from the api
        // it came in the json called as it is below 
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      });
    }
  }
  // The state is set above and therefore rendered below for the Form and weather component to recieve data from .props
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error} />
      </div>
    );
  }
}

export default App;