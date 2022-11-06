import React, { Component } from 'react';
import './../CSS/Button.css'; // Tell webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <button type="button" className="Button">Test</button>;
  }
}

export default Button;