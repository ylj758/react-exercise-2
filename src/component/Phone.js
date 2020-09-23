import React, {Component} from 'react'
import Product from '../assets/product_image_placeholder.png';

class Phone extends Component {
  render() {
    const {name, price,onIncrement} = this.props;
    return (
      <section key="index" className="phoneSection">
        <p className="phoneType">{name}</p>
        <img className="phoneImg" src={Product}></img>
        <section>
          <p className="price">{price}</p>
          <button className="cart" onClick={onIncrement}>add to cart</button>
        </section>
      </section>
    );
  }
}

export default Phone
