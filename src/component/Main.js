import Phones from "./Phones";
import React, {Component} from 'react'

class Main extends Component {
  render() {
    const {phones,onIncrement} = this.props;
    const category = [
      ...new Set(phones.map((item) => item.category)),
    ];
    return (
      <main >
        {
          category.map((category, index) => {
            return <Phones key={index}
                           category={category}
                           products={phones.filter(
                             (product) => product.category === category
                           )}
                           onIncrement={onIncrement}
            />
          })
        }
      </main>
    );
  }
}

export default Main