import React, { Component } from 'react';
import Slider from 'react-slick';

import banner_1 from '../../img/banner1.jpg';
import banner_2 from '../../img/banner2.jpg';
import banner_3 from '../../img/banner3.jpeg';

import './Banners.css';

export default class Banners extends Component {
  render() {
    return(
      <div className='top_banners'>
        <Slider
          accessibility={true}
          draggable={true}
          infinite={true}
          slidesToShow={3}
          autoplay={true}
          autoplaySpeed={4000}>
          <img src={banner_1} alt='1' />
          <img src={banner_2} alt='2' />
          <img src={banner_3} alt='3' />
        </Slider>
      </div>
    )
  }
}
