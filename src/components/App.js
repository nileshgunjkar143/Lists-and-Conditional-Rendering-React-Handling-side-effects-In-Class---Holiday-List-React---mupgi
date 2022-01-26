
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },

    ]
  }

  render() {
    return (
      <div id="main">
        <ol>
        {this.cityList.map((c,index) => <li key={"location" +index+1}>{c.name}</li>)}
        </ol>
      </div>
    )
  }
}


export default App;
