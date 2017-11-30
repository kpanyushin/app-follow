import React, { Component } from 'react';
// import propTypes from 'prop-types';
import DeviceConditional from './Components/DeviceConditional/DeviceConditional';
import Collection from './Components/Collection/Collection';
import Banners from './Components/Banners/Banners';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleIPhoneClick = this.handleIPhoneClick.bind(this);
    this.handleIPadClick = this.handleIPadClick.bind(this);
    this.state = {
      activeDevice: 'iPhone'
    }
  }

  handleIPhoneClick = () => {
    this.setState({
      activeDevice: 'iPhone'
    });
  }

  handleIPadClick = () => {
    this.setState({
      activeDevice: 'iPad'
    })
  }
  render() {
    return (
      <div className="App">
          <DeviceConditional
            onIphoneClick={this.handleIPhoneClick}
            onIpadClick={this.handleIPadClick} />
          <Banners />
          <Collection activeDevice={this.state.activeDevice}/>
      </div>
    );
  }
}

export default App;
