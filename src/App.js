import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import DeviceConditional from './Components/DeviceConditional/DeviceConditional';
import Collection from './Components/Collection/Collection';
import Banners from './Components/Banners/Banners';
import Modal from './Components/Modal/Modal';
import './App.css';

import * as ModalState from './Redux/reducers/ModalState';

class App extends Component {
  static PropTypes = {
    isOpen: propTypes.boolean
  };
  constructor(props) {
    super(props);

    this.handleIPhoneClick = this.handleIPhoneClick.bind(this);
    this.handleIPadClick = this.handleIPadClick.bind(this);
    this._openModal = this._openModal.bind(this);
    this.state = {
      activeDevice: 'iPhone'
    }
  }

  _openModal = () => {
    let { setModalOpen, isOpen } = this.props;

    setModalOpen(!isOpen);
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
    let { activeDevice } = this.state;
    let { isOpen } = this.props;

    return (
      <div className="App">
          <DeviceConditional
            onIphoneClick={this.handleIPhoneClick}
            onIpadClick={this.handleIPadClick}
            activeDevice={activeDevice} />
          <Banners />
          <Collection
            modalOpen={this._openModal}
            activeDevice={activeDevice} />
          <Modal
            modalOpen={this._openModal}
            isOpen={isOpen}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.getIn(['modal', 'isOpen'])
});

const mapDispatchToProps = dispatch => ({
  setModalOpen(isOpen) {
    return dispatch(ModalState.set(isOpen));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
