import React, { Component } from "react";
//porps have to be thrown in as an argument in order for props to work and notice how
//this. was removed in a stateless component
const Weather = (props) => {
    return (
        <div>
            {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Coditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}
// conditional operators from { this expression } what line 7 means is, if this.props.city returns true, 
// and this.props.country returns true only then do we want what's next
// if statements 
export default Weather;

// class Weather extends Component {
//     render() {
//         return (
                // <div>
                //     {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                //     {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                //     {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                //     {this.props.description && <p>Coditions: {this.props.description}</p>}
                //     {this.props.error && <p>{this.props.error}</p>}
                // </div>
//             all code goes here /////////////// 
//         )
//     }
// }
/// this way is a state component and the one above with the const
/// is a stateless component that does not change states and is for UI only
// since the state is not changing we do not need a state component, and can use a stateless to write cleaner codes
