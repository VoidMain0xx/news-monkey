import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

// Ensure that your environment variable is correctly set up and accessible.
const APIkey = process.env.REACT_APP_API_KEY_LOCAL;
console.log("API Key:", process.env.REACT_APP_API_KEY_LOCAL);


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={10} APIkey={APIkey} />
      </>
    );
  }
}
