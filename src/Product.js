import React, {Component} from 'react';
import  './Product.css';
class Product extends Component{
    render() {
        return (
          <div className="Product">
          <img src={this.props.imagen} alt={this.props.tela}></img>
            <div class="middle">
              <div class="text">
                {this.props.tela}-
                
                {this.props.precio}
              </div>
            </div>            
          </div>
        );
      }
    }
    
export default Product;
    