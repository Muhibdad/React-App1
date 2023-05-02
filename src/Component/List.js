import React from 'react'
import Items from './Items';
export default function List(props) {
  let items=props.arr.map((item,index)=>{
    return <Items title={item} key={index} />
})
  return (
    
    <div>
      {items}
    </div>
  )
}
