

import React from 'react'
import PropTypes from 'prop-types';

const Select = ({placeholder,data,onSelect})=>{

    return(
        <select defaultValue={'DEFAULT'} onChange={onSelect}>
        <option value="DEFAULT" disabled>{placeholder}</option>
        {data.map((item,index)=>{
            return(
                <option key={`select_${index}`} value={item}>{item}</option>
            )
        })}
        </select>
    )

}
Select.propTypes={
    data:PropTypes.array,
    onSelect:PropTypes.func
  
  
  }
  Select.defaultProps={
    placeholder:'',
    data:[],
    onSelect:()=>{}
  
  }
  
export default Select