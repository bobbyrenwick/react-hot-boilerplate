import React from 'react';
import Radium from 'radium';

const App = React.createClass({

  getText() {
    return 'Hello World';
  },

  getStyles() {
    return {
      color: 'blue',
    };
  },

  render() {
    return (
      <h1 style={this.getStyles()}>{this.getText()}</h1>
    );
  }
});

module.exports = Radium(App);
