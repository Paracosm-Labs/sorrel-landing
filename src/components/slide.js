import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-width max-content-container">

          <span className="slide-testimonial">{props.Vision}</span>

      </div>
    </div>
  )
}

Slide.defaultProps = {
  Vision:
    '"Our vision is to help in creating a world where everyone has access to financial services, regardless of their background or location. We are dedicated to creating a more inclusive future with Sorrel Banq."',
  rootClassName: '',
}

Slide.propTypes = {
  Vision: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide
