import React  from "react";
import './index.module.scss'
import PropTypes from 'prop-types';

const Table = ({data})=>{

    return(
      <div style={{overflowX:'auto'}}>
                <table>
  <tr>
    <th>編號</th>
    <th>行政區域</th>
    <th>鄉鎮區</th>
    <th>商家</th>
    <th>地址</th>
  </tr>
  {data.map((item,key)=>{
    return(
      <tr key={`table_${key}`}>
      <td>{key+1}</td>
      <td>{item.City}</td>
      <td>{item.Town}</td>
      <td>{item.Name}</td>
      <td>{item.Address}</td>
    </tr>

    )
  })}
 

</table>
        
        </div>


    )
}

Table.propTypes={
  data:PropTypes.array,

}
Table.defaultProps={

  data:[],

}


export default Table