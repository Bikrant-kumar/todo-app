import React, {useState} from 'react';

function ItemList({key,todo,idx,onClickDelete, onClickUpdate, onClickEdit,onClickSave}) {
 const [title,setTitle] = useState(todo.title);
 return( 
    <li 
    style={{ 
        padding:'5px 5px',
        backgroundColor:todo.isCompleted ? "green" : "red",
        alignItems: 'center'
        }}
    >
    {todo.isEdit ? 
    <>
    <input value={title}
     onChange={(e)=>{setTitle(e.target.value)}}/> 
    <button onClick={() => onClickSave(title,idx)}> save</button>
    </>
    :
    <>
    <strong> {title} </strong>
    <button onClick={()=>onClickUpdate(idx)}> update Status</button>
    {!todo.isCompleted && <button onClick={()=>onClickEdit(idx)}> Edit  </button>}
    <button onClick={()=>onClickDelete(idx)}> Delete  </button>
    </>
    }
    
  </li>  
)}

export default ItemList;

