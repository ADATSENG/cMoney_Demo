import React from 'react'
import './index.scss'
import HoverImage from '../../components/hoverImage'
import PropTypes from 'prop-types';
const Hr = ()=>{
  return(
    <div className="photo__hr"></div>
  )
}

const Photo = ({data})=>{
  return(
    <div className="photo__wrapper wrap">
      {
         data.map((item,key)=>{
          const {City,Town,Name,PicURL,HostWords}=item
          return(
            <div key={`photo_${key}`} className="relative photo">

                <HoverImage className="objectCover photo__image" alt={Name} src={PicURL}></HoverImage>
            
            <div className="photo__section">
            <div className="row">
            <p className="photo__cube">{City}</p>
            <p className="italic">{Town}</p>
            </div>
         
            <p className="photo__title bold">{Name}</p>
            <div className="photo__briefly">
         <Hr></Hr>
            <p className="ellipsis photo__hotWords">{HostWords}</p>
              </div>

            </div>
          
            </div>
          )
        })
      }

    </div>
)
}

Photo.propTypes={
  limit:PropTypes.array,


}
Photo.defaultProps={
  data:[],

}

export default Photo