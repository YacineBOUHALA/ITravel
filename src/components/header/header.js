/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import React from 'react'
import headerImg from '../../assets/images/header1.jpeg'
import './header.scss'

const Header = () => {
  return (
    <div>
      <div className="fixed-img">
        <img src={headerImg} alt="header" />
        <div className="header-text">
          <p>
            Embark on a Journey of Discovery and Delight: Explore Our Captivating Destinations!
          </p>
          <div className="login">
            <a href="#most-popular">
              Explore now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
