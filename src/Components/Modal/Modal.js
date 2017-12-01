import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Modal.css';

export default class Modal extends Component {
  static PropTypes = {
    isOpen: propTypes.boolean,
    modalOpen: propTypes.func,
  };
  render() {
    let { modalOpen, isOpen } = this.props;

    // console.log(this.props);

    return(
      <div className={isOpen ? "modal_container modal_active" : "modal_container"}>
        <div onClick={modalOpen}>Закрыть</div>
      </div>
    )
  }
}
