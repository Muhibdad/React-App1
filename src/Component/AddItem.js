import React from 'react'

export default function AddItem(props) {
    let itemName="";
    let onSubmitHandler=(event)=>{
        event.preventDefault();
        props.onAdd(itemName);
    }
    let onInputChangeHandler=(event)=>{
        event.preventDefault();
        itemName=event.target.value;
    }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <labe for="inputItem">Input Item</labe>
        <input id="inputItem" onChange={onInputChangeHandler}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
