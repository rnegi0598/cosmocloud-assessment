import React from 'react'
import NonObjectItem from '../nonObjectComponent/NonObjectItem';
import './ObjectItem.scss'
const ObjectItem = ({item}) => {
   
  return (
    <div className='object'>
        <NonObjectItem item={item}/>
        {
            item.children.map((child)=>{
                return child.type==="object"?
                <ObjectItem key={child.id} item={child}/>:
                <NonObjectItem key={child.id} item={child}/>
            })
        }
    </div>
  )
}

export default ObjectItem;