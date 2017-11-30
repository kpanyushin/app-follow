import React, { Component } from 'react';
import './DeviceConditional.css';

export default class DeviceConditional extends Component {
  render() {
    let { onIphoneClick, onIpadClick } = this.props;

    return(
      <div className="conditional_container">
        <div className="ui buttons">
          <button
            className={'iPhone' ? 'ui button active' : 'ui button'}
            onClick={onIphoneClick}>
            iPhone
          </button>
          <button
            className={'iPad' ? 'ui button active' : 'ui button'}
            onClick={onIpadClick}>
            iPad
          </button>
        </div>
      </div>
    )
  }
}
