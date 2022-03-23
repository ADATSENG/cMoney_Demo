import React from 'react'
import  './index.scss'
import PropTypes from 'prop-types';

const HoverImage = ({className,alt,src})=>{
  return(
    <div className="hoverImage">
      <div className="hoverImage__wrapper">
      <img className={className} alt={alt} src={src}/>
      <div className="hoverImage__mask"> </div>

      </div>
    </div>
   
  )

}

HoverImage.propTypes={
  className: PropTypes.string,
  alt: PropTypes.string,
  src:PropTypes.string
}
HoverImage.defaultProps={
  className:'',
  alt:'',
  src:''

}

export default HoverImage