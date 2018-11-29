import React, { Component } from 'react';
import './App.css';
import { MDBBtn } from "mdbreact";
import Product from './Product'
import StickyHeader from './StickyHeader'
import Footer from './Footer'


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
          <MDBBtn  size="lg" color="elegant" onClick={this.todo.bind(this)}>Todo</MDBBtn>
          <MDBBtn  size="lg" color="elegant" onClick={this.camiseta.bind(this)}>Licra</MDBBtn>
          <MDBBtn  size="lg" color="elegant"onClick={this.licra.bind(this)}>Camiseta</MDBBtn>
          
        </div>
        <div className="data-container">
          {this.state.data.map(function(prod, index){
                return (<Product prod = {prod}/>)
                }
              )
          }
        </div>
        <div className="footer-container">
          <Footer/>
        </div>
        
      </div>
    );
  }
}

export default App;