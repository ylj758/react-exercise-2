import React, {Component} from 'react'
import Product from '../assets/product_image_placeholder.png';

class Phone extends Component {
  render() {
    const {name, img, price} = this.props;
    return (
      <section className="phoneSection">
        <p className="phoneType">{name}</p>
        <img className="phoneImg" src={Product}></img>
        <section>
          <p className="price">{price}</p>
          <button className="cart" onClick={this.props.onIncrement}>add to cart</button>
        </section>
      </section>
    );
  }
}

export default Phone
