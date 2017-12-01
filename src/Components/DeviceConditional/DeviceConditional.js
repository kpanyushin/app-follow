import React, { Component } from 'react';
import propTypes from 'prop-types'
import './DeviceConditional.css';

export default class DeviceConditional extends Component {
  static propTypes = {
    onIphoneClick: propTypes.func,
    onIpadClick: propTypes.func,
    activeDevice: propTypes.string
  }
  render() {
    let { onIphoneClick, onIpadClick, activeDevice} = this.props;

    return(
      <div className="conditional_container">
        <div className="ui buttons">
          <button
            className={activeDevice === 'iPhone' ? 'ui button active' : 'ui button'}
            onClick={onIphoneClick}>
            iPhone
          </button>
          <button
            className={activeDevice === 'iPad' ? 'ui button active' : 'ui button'}
            onClick={onIpadClick}>
            iPad
          </button>
        </div>
      </div>
    )
  }
}
