import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <img
        alt={props.image_alt}
        src="/playground_assets/logox.png"
        className="footer-image"
      />
      <span className="footer-text">© {new Date().getFullYear()}+{props.text}</span>
    </footer>
  )
}

Footer.defaultProps = {
  image_alt: 'Sorrel',
  image_src: '/playground_assets/logox.png',
  text: ' Sorrel Banq | Paracosm Labs. All Rights Reserved.',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
