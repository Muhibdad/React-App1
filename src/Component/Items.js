import React from 'react'

export default function Items(props) {  
    const [title,setTitle]=React.useState(props.title);
    let changeIt=()=>{
        setTitle("New Title");
    }
    return (
    <div>
      {title}
      <button onClick={changeIt}>Buttin</button>
    </div>
  )
}
