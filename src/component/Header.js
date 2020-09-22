import React, {Component} from 'react'
import Cart from '../assets/cart.png'

class Header extends Component {
  render() {
    return (
      <header>
        <p className="store">Strore</p>
        <section>
          <img className="cartImg" src={Cart}></img>
          <label className="cartNum">{this.props.cartNum}</label>
        </section>

      </header>
    );
  }
}

export default Header
