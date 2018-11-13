import React, { Component } from 'react';
import './App.css';

import Product from './Product'
import StickyHeader from './StickyHeader'

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

  licra(){
    this.setState({
      data: this.state.data.filter(prod => {
        return prod.category === 'LIC'
      })
    })
   }
   camiseta(){
    this.setState({
      data: this.state.data.filter(prod => {
        return prod.category === 'CAM'
      })
    })
   }
   todo(){
    fetch('http://127.0.0.1:8000/api/v1/post/').then(
      data => data.json()
     ).then((result) =>{
       this.setState({
         data : result,
         loaded : true
       })
     }
     )
   }

  render() {
    return (
      <div className="App">
        <header className="Sticker">
          <StickyHeader/>
        </header>
        <div className="cat-container">
          <button onClick={this.todo.bind(this)}>Todo</button>
          <button onClick={this.camiseta.bind(this)}>Licra</button>
          <button onClick={this.licra.bind(this)}>Camiseta</button>
          
        </div>
        <div className="data-container">
          {this.state.data.map(function(prod, index){
                return (<Product prod = {prod}/>)
                }
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
