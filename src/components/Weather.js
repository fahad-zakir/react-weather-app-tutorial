import React, { Component } from "react";
//props have to be thrown in as an argument in order for props to work since it's not defined with it being in the argument
//and notice how this. was removed in a stateless component

// if you are only returning one argument in an arrow function you can get rid of the surrounding parenthesis
const Weather = props => (
  //this div block is the only element, not all the props
  //if you are only returning one element in an arrow function, like in here we are doing it with this setup
  //of const otherwise look below in comments for the mulitple elements method
  <div className="weather__info">
    {props.city &&
      props.country && (
        <p className="weather__key">
          Location:
          <span className="weather__value"> {props.city}, {props.country}
          </span>
        </p>
      )}
    {props.temperature && (
      <p className="weather__key">
        Temperature:
        <span className="weather__value"> {props.temperature}</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity:
        <span className="weather__value"> {props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Coditions:
        <span className="weather__value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__error"> {props.error}</p>}
  </div>
);
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

// const Weather = props => {
//   return (
    //this div block is the only element, not all the props
    //if you are only returning one element, like in here we are doing it with this setup
    //of const otherwise look below in comments for the mulitple elements method
//     <div>
//       {props.city &&
//         props.country && (
//           <p>
//             Location: {props.city}, {props.country}
//           </p>
//         )}
//       {props.temperature && <p>Temperature: {props.temperature}</p>}
//       {props.humidity && <p>Humidity: {props.humidity}</p>}
//       {props.description && <p>Coditions: {props.description}</p>}
//       {props.error && <p>{props.error}</p>}
//     </div>
//   );
// };