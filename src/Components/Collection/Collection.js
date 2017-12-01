import React, { Component } from 'react';
import propTypes from 'prop-types';
import applications from '../../utils/applications.js';
import Modal from '../Modal/Modal.js';
import './Collection.css';

class Collection extends Component {
  static PropTypes = {
    modalOpen: propTypes.func,
    activeDevice: propTypes.string
  };
  render() {
    let { modalOpen, activeDevice } = this.props;

    return (
      <div className="collection_container">
        <div className="collection_row">
          {
            applications.map((element, key) => {
              if (activeDevice === element.device) {
                if (element.collection === 'Games') {
                  return (
                    <div key={key} className="collection_item">
                      <img src={element.icon} alt={element.title} />
                      {element.title} {element.category} {element.price === 0 ? '' : `${element.price}$`}
                      <a href={element.link} target='_blank'>itunes</a>
                      <p>{element.collection}</p>
                    </div>
                  );
                }
              }
              return false;
            })
          }
        </div>
        <div className="collection_row">
          {
            applications.map((element, key) => {
              if (activeDevice === element.device && element.collection === 'Free') {
                return (
                  <div key={key} className="collection_item">
                    <img src={element.icon} alt={element.title} />
                    {element.title} {element.category} {element.price === 0 ? '' : `${element.price}$`}
                    <a href={element.link} target='_blank'>itunes</a>
                    <p>{element.collection}</p>
                  </div>
                );
              }
              return false;
            })
          }
        </div>
        <div className="collection_watch-all">
          <button onClick={modalOpen}>
            См. все
          </button>
        </div>
        <Modal />
      </div>
    );
  }
}

export default Collection;
