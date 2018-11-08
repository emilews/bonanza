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

  cat(){
    fetch('http://127.0.0.1:8000/api/v1/category/LIC').then(
      data => data.json()
     ).then((result) =>{
       this.setState({
         data : result,
         loaded : true
       })
       this.forceUpdate();
     }
     )
   }
   cat2(){
    fetch('http://127.0.0.1:8000/api/v1/category/CAM').then(
      data => data.json()
     ).then((result) =>{
       this.setState({
         data : result,
         loaded : true
       })
       this.forceUpdate();
     }
     )
   }
   todo(){
    fetch('http://127.0.0.1:8000/api/v1/post/').then(
      data => data.json()
     ).then((result) =>{
       this.setState({
         data : result,
         loaded : true
       })
       this.forceUpdate();
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
          <button onClick={this.cat.bind(this)}>Licra</button>
          <button onClick={this.cat2.bind(this)}>Camiseta</button>
          
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
