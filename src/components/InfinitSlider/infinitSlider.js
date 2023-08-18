/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './infinitSlider.scss'

const InfinitSlider = ({ list }) => {
  return (
    <div className="slick_container">
      <div style={{ paddingTop: 50 }}>
        <div className="texts">
          <h1>MOST VISITED PLACES</h1>
          <p>The world&apos;s most visited places, like the Eiffel Tower and Great Wall
            of China, blend historical significance with modern allure. Iconic cityscapes
            such as Times Square and natural wonders like the Grand Canyon offer
            captivating experiences, while historic sites like Machu Picchu evoke
            a sense of wonder and discovery.
          </p>
        </div>
        <Slider infinite={true} speed={1000}
          slidesToShow={1.68} autoplay={false} dots={false}
          slidesToScroll={1} arrows={false}
        >
          {list.map((component, index) => {
            return (
              <div key={`slide-${index}`} className="partner_slider_container">
                <div style={{ width: '100%', marginLeft: 30 }}>
                  {component}
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default InfinitSlider
