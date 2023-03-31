import React from 'react'
import './Interface.scss';
import ObjectItem from '../objectComponent/ObjectItem'
import NonObjectItem from '../nonObjectComponent/NonObjectItem';
import { InterfaceContext } from '../../context/InterfaceContextComponent';
import { useContext } from 'react';
import AddIcon from "@mui/icons-material/Add";

const Interface = () => {
    const {interfaceData}=useContext(InterfaceContext);
    // console.log(interfaceData);
  return (
    <div>
        <div className='rootObject'>
        <p>Field name and type</p>
        <button>
          <AddIcon />
        </button>
      </div>
      <div>
        {
          interfaceData.children.map((item)=>{
            //depending on the item's type we call diff component
            return item.type==="object"?
            <ObjectItem key={item.id} item={item}/>:
            <NonObjectItem key={item.id} item={item}/>
          })
        }
      </div>
    </div>
  )
}

export default Interface