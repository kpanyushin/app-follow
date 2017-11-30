import React, { Component } from 'react';
import './DeviceConditional.css';

export default class DeviceConditional extends Component {
  state = {
    activeDevice: 'iPhone'
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
    // let { activeDevice } = this.state;

    return(
      <div className="conditional_container">
        <div className="ui buttons">
          <button
            className={this.state.activeDevice === 'iPhone' ? 'ui button active' : 'ui button'}
            onClick={this.handleIPhoneClick}>
            iPhone
          </button>
          <button
            className={this.state.activeDevice === 'iPad' ? 'ui button active' : 'ui button'}
            onClick={this.handleIPadClick}>
            iPad
          </button>
        </div>
      </div>
    )
  }
}
