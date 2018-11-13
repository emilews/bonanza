import React, {Component} from 'react';
import  './Product.css';

class Product extends Component{
  constructor(props){
    super(props)

    this.state = {
      category : props.category
    }
  }
    render() {
      const {image, title, price } = this.props.prod
        return (
          <div className="inliner">
          <div className="Product">
            <img src={image} alt={title}></img>
              <div className="middle">
                <div className="text">
                  {title}<br></br>
                  ${price}<br></br>
                </div>
              </div>            
          </div>
          </div>
        );
      }
    }
    
export default Product;
    