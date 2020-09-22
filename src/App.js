import React, {Component} from 'react';
import './App.scss';
import Header from './component/Header'
import Main from './component/Main'

class App extends Component {
  state = {
    phones: [],
    cartNum:0
  };

  async componentDidMount(){
    const result = await fetch("http://localhost:3000/products");
    const data = await result.json();
    this.setState({
      phones:data
    });
  }

  handleIncrement = () => {
    this.setState({
      cartNum:this.state.cartNum+1
    });
  };
  render() {

    return (
      <div className="app">
        <Header cartNum={this.state.cartNum}/>
        <Main phones={this.state.phones}
              onIncrement={this.handleIncrement}
         />
      </div>
    );
  }
}

export default App;
