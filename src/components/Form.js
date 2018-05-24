import React, { Component } from 'react';

const Form = props => (
    <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
    </form>
);

export default Form;

// look at weather component for notes on this stateless component which starts with const