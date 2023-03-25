import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="#home"><span className="navbar-link">{props.text}</span></a>
      <a href="#features"><span className="navigation-links-text1 navbar-link">{props.text1}</span></a>
      <a href="#vision"><span className="navigation-links-text2 navbar-link">{props.text2}</span></a>
      <a href="#community"><span className="navigation-links-text3 navbar-link">{props.text3}</span></a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text: 'Home',
  text1: 'Features',
  text2: 'Vision',
  text3: 'Community',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
