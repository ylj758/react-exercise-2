import React, {Component} from 'react'
import Phone from './Phone';

class Phones extends Component {
  render() {
    const {category, products,onIncrement} = this.props;
    return (
      <div>
        <h1 className="iphoneTitle">{category}</h1>
        <section className="iphoneContent">
          {
            products.map((product,index) => {
              return <Phone name={product.name}
                            price={product.price}
                            onIncrement={onIncrement}/>;
            })
          }
        </section>
      </div>
    );
  }
}

export default Phones
