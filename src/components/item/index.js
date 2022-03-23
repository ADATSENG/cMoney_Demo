import React from 'react'
import './index.scss'
import HoverImage from '../../components/hoverImage'
import PropTypes from 'prop-types';


const Item = ({data})=>{


    return(
        data.map((item,key)=>{
            const {Name,HostWords,City,Town,PicURL} = item
            return(
                <div key={`item_${key}`}>
                  <div  className="item__forWeb relative">
                <div className="item__cube item__tag">{City}</div>
       
        <div className="row item__list">
         <HoverImage className="objectCover item__leftImage" src={PicURL}></HoverImage>           
           <div className="item__section">
           <h1 className="alignLeft item__title">{Name}</h1>
           <p className="alignLeft item__hotWords ellipsis">{HostWords}</p>
           </div>
           <div className="item__town">{Town}</div>
           </div>
         
          
           </div>


           <div className="item__forMobile relative">
              
        <div className="item__list">
    
        <HoverImage className="objectCover item__leftImage" src={PicURL}></HoverImage>                      
           <div>
           <h1 className="alignLeft item__title">{Name}</h1>
           <div className="row">
           <div className="item__cube">{City}</div>
           <div>{Town}</div>

           </div>
         
           <p className="alignLeft item__hotWords ellipsis">{HostWords}</p>
           </div>
           </div>
           </div>
                </div>
              
            )

        })

    )

}
Item.propTypes={
    data:PropTypes.array
  }
  Item.defaultProps={
    data:[]
  
  }
export default Item