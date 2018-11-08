import React, {Component} from 'react';
import  './Product.css';
class Product extends Component{
    render() {
        return (
          <div className="inliner">
          <div className="Product">
            <img src={this.props.image} alt={this.props.title}></img>
              <div className="middle">
                <div className="text">
                  {this.props.title}-
                  {this.props.price}
                </div>
              </div>            
          </div>
          </div>
        );
      }
    }
    
export default Product;
    