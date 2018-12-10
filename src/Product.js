import React, {Component} from 'react';
import  './Product.css';

class Product extends Component{
  constructor(props){
    super(props)

   
  }
    render() {
      const {image, title, price } = this.props.prod
      // const image = this.props.prod.image
      // const title = this.props.prod.title
      // const price = this.props.prod.price
        return (
         

       
          <div className="inliner">
          <div className="Product">
            <img className= "producto" src={image} alt={title}></img>
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