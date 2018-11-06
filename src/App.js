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
      everything: null
    }
  }

  componentDidMount(){
    //TO DO: Make calls to rest API
  }
    
  render() {
    return (
      <div className="App">
        <div class="Sticker">
          <Sticky>
            <DropdownMenuHandler/>
          </Sticky>
      </div>
        <div class="data-container">
          <Product tela = "Gari" precio="$45" imagen={Image}/>
        </div>
      </div>
    );
  }
}

export default App;
