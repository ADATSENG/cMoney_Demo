import React, {  useEffect, useState }  from "react";
import Loading from '../../components/loading'
import data from './data.json'

import Select from '../../components/select'
import Table from '../../components/table'
import Item from '../../components/item'
import Pagination from '../../components/pagination'
import Photo from '../../components/photo'
import { uniq,chunk } from 'lodash'

import   './index.scss'
import  '../../styles/layout.scss'
import {MODE} from '../../utils'


const PAGE_LIMIT=10

const Home =()=>{

    const [loading,setLoading] = useState(true)
    const [selectCity,setSelectCity]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [chunkData,setChunkData]= useState(chunk(data,PAGE_LIMIT))
    const [totalPage,setTotalPage] = useState(data)

    const [mode,setMode] = useState(MODE.FaThList)

    const renderCitysSelect =()=>{

        const onSelect = (event)=>{
           const value= event.target.value
          const updateCity= data.filter((item)=>item.City===value)
          setTotalPage(updateCity)

          setSelectCity(updateCity)
      setChunkData(chunk(updateCity,PAGE_LIMIT))

    
        }
    
        const citys=[]
        data.forEach((item)=>{
            citys.push(item.City)
        })
       const updateCitys= uniq(citys)

    
        return(
            <Select placeholder="請選擇行政區域" data={updateCitys} onSelect={onSelect}></Select>
        )
    }
    
    const renderTownsSelect = ()=>{
        const onSelect = (event)=>{
            const value= event.target.value
          const updateData=  chunkData[currentPage-1].filter((item)=>item.Town===value)
          setTotalPage(updateData)
          setChunkData(chunk(updateData,PAGE_LIMIT))
        }
        const towns=[]
        selectCity.forEach((item)=>{
            towns.push(item.Town)
        })
       const updateTowns= uniq(towns)
    
    
        return(
            <Select placeholder="請選擇鄉鎮區" data={updateTowns} onSelect={onSelect}></Select>
        )
    }

  
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },500)


    },[])

    const paginate = currentPage => {
        setCurrentPage(currentPage);
      };

      const onClickMode = (item)=>{

          setMode(item)
      }

        const updateModeView = ()=>{
            return(
                <div>
                    <div className="justifyContentBetween px-5">
                    <div>
             {renderCitysSelect()}
            {renderTownsSelect()}
             </div>
             <div className="rowHCenter">
             <p>檢視模式</p>
             
         {
             Object.values(MODE).map((item, index)=> {
                 return(
                     <div className="home__icon" onClick={()=>onClickMode(item)} key={index}>
                     { item.render}
                     </div>
                   
                 )
              })
         }
             </div>
                    </div>
                  
               
                {mode.key==="FaThList" && <Item data={chunkData[currentPage-1]}></Item> }
                 {mode.key==="FaThLarge"&&<Photo data={chunkData[currentPage-1]}></Photo>}
                 {mode.key==="FaAlignJustify"&&<Table data={chunkData[currentPage-1]}></Table>}

                    </div>
                            
            )
        }
            

    return(
        <div className="home">

         {loading? <Loading/>:
         <>
          <h1 className="rowVCenter">農村地方美食小吃特色料理</h1>
            <div className="rowVCenter home__wrapper">

            {updateModeView()}
                  <div className="home__advertise">
                <div>
                <img src="/img/adv1.png" alt=""></img>
                </div>
                <div>
                <img src="/img/adv2.png" alt=""></img>
                </div>
                <div className="sticky">
                <img src="/img/adv3.png" alt=""></img>
                </div>
                </div>
                

         </div>

         <div className="rowVCenter">
         <Pagination
         currentPage={currentPage}
         paginate={paginate}
         limit={PAGE_LIMIT}
         total={totalPage.length}
     />


         </div>
         
         </>
         
         }
      </div>
    )
}

export default Home