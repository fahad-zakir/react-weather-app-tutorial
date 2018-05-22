import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
    <div>
        { this.props.temperature }
    </div>
    );
  }
}

export default Weather;
