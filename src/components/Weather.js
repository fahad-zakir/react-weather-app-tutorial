import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
    <div>
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
        { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
        { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
        { this.props.description && <p>Coditions: { this.props.description }</p> }
        { this.props.error && <p>{ this.props.error }</p> }
    </div>
    );
  }
}
// conditional operators from { this expression } what line 7 means is, if this.props.city returns true, 
// and this.props.country returns true only then do we want what's next
// if statements 
export default Weather;
