import React, { Component } from 'react';
import applications from '../../utils/applications.js';
import './Collection.css';

class Collection extends Component {
  render() {
    let { activeDevice } = this.props;

    return (
      <div className="collection_container">
        <div className="collection_row">
          {
            applications.map((element, key) => {
              if (activeDevice === element.device) {
                return (
                  <ul key={key}>
                    <li>
                      <img src={element.icon} alt={element.title} />
                      {element.title} {element.category} {element.price === 0 ? '' : `${element.price}$`} <br />
                    </li>
                  </ul>
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default Collection;
