import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar-container ${props.rootClassName} `}>
      <header data-role="Header" className="navigation-container">
        <img
          alt={props.image_alt}
          src="/playground_assets/logox.png"
          className="navbar-image"
        />
        <div className="navbar-nav">
          <NavigationLinks
            text1="Features"
            text2="Vision"
            text21="Community"
            rootClassName="navigation-links-root-class-name10"
            className=""
          ></NavigationLinks>
        </div>
        <a href="https://app.sorrelbanq.org/" target="_blank">
          <button className="button-primary button navbar-primary-btn1">
            {props.PrimaryBtn}
          </button>
        </a>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  image_src: '409bb369-f4c0-4878-9c6f-e088ed8524ba',
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'logo',
  image_alt1: 'image',
  text: 'Follow us',
  rootClassName: '',
  PrimaryBtn: 'Launch App',
  PrimaryBtn1: 'Get started',
}

Navbar.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  PrimaryBtn: PropTypes.string,
  PrimaryBtn1: PropTypes.string,
}

export default Navbar
