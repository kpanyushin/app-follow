import React, { Component } from 'react';
import iPhone from '../../utils/iPhone.js';
import './Collection.css';

class Collection extends Component {
  render() {
    // let { collection } = this.props;

    return (
      <div className="collection_container">
        <div className="collection_row">
          {
            iPhone.map((element, key) => {
              return (
                <ul key={key}>
                  <li>
                    <img src={element.icon} alt={element.title} />
                    {element.title} {element.category} {element.price === 0 ? '' : `${element.price}$`}
                  </li>
                </ul>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Collection;
