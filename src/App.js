import React, { Component } from 'react';
import DropdownMenuHandler from './Dropdownmenu'
import Sticky from 'react-sticky-el';
import Product from './Product'

import axios from 'axios'
import './App.css';
import Image from'./4k.jpg'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
      loaded: false
      }

      
    }
  

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/v1/post/').then(
     data => data.json()
     
    ).then((result) =>{
      this.setState({
        data : result,
        loaded : true
      })
      console.log(this.state.data)
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
          {this.state.data.map(function(prod, index){
                return (<Product title = {prod.title} price = {prod.price} image = {prod.image}/>)
                }
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
