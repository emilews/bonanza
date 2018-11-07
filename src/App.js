import React, { Component } from 'react';
import DropdownMenuHandler from './Dropdownmenu'
import Sticky from 'react-sticky-el';
import Product from './Product'

import './App.css';
import Image from'./4k.jpg'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      no_cors: 'https://cors-anywhere.herokuapp.com/'
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/api/v1/post/').then(
     response => {
      console.log(response)
      }
    )
  }
    
  render() {
    return (
      <div className="App">
        <div className="Sticker">
          <Sticky>
            <DropdownMenuHandler/>
          </Sticky>
      </div>
        <div className="data-container">
          
        </div>
      </div>
    );
  }
}

export default App;
