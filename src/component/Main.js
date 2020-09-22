import Phone from "./Phone";
import React, {Component} from 'react'

class Main extends Component {
  render() {
    return (
      <main>
        <h1 className="iphoneTitle">iPhone</h1>
        <section className="iphoneContent">
          {
            this.props.phones.map((phone, index) => {
              if (phone.category == 'iPhone') {
                return <Phone key={index}
                              name={phone.name}
                              price={phone.price}
                              onIncrement={this.props.onIncrement}
                />
              }
            })}
        </section>
        <h1 className="iphoneTitle">HUAWEI</h1>
        <section className="iphoneContent">
          {
            this.props.phones.map((phone, index) => {
              if (phone.category == 'HUAWEI') {
                return <Phone key={index}
                              name={phone.name}
                              price={phone.price}
                              onIncrement={this.props.onIncrement}
                />
              }
            })}
        </section>
      </main>
    );
  }
}

export default Main