import React,{useState} from 'react';
import ItemList from './ItemList';

function App() {
  const [todoData,setTodoData] = useState([]);
  const [value,setValue] = useState({
    title:"",
    isCompleted: false,
    isEdit: false
  });
  const onClickAdd = () => {
    if(value.title){
      setTodoData([...todoData,value]);
      setValue({
      title:"",
      isCompleted: false,
      isEdit: false
    });
  }}

  const onClickDelete = (idx) => {
    console.log(idx);
    const tempValue = [...todoData];
    tempValue.splice(idx,1);
    setTodoData(tempValue);
  }

  const onClickUpdate = (idx)=> {
    const tempValue = todoData[idx];
    const updatedItem = {
      ...tempValue,
      isCompleted: !tempValue.isCompleted
    }
    const temTodoData = [...todoData];
    temTodoData[idx] = updatedItem;
    setTodoData(temTodoData);
  }
  const onClickEdit = (idx)=>{
    const tempValue = todoData[idx];
    const updatedItem = {
      ...tempValue,
      isEdit: !tempValue.isEdit
    }
    const temTodoData = [...todoData];
    temTodoData[idx] = updatedItem;
    setTodoData(temTodoData);
  }

  const onClickSave = (title, idx) => {
    const tempValue = todoData[idx];
    const updateTempValue = {
      ...tempValue,
      title: title,
      isEdit: false
    }
    const tempTodoData = [...todoData];
    tempTodoData[idx] = updateTempValue;
    setTodoData(tempTodoData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2> Simple to do app</h2>
        <hr style={{ width:'100%'}}/>
      </header>
      <div>
        <input
          placeholder='Enter Item'
          value= {value.title}
          onChange={(e) => {
            setValue({
              title: e.target.value,
              isEdit: false,
              isCompleted: false
            })
          }}
        />
        <button onClick={onClickAdd}> Add Item </button>
      </div>
      <ul>
        {todoData.length > 0 && 
          todoData.map((data,idx) => {
              return ( 
                <ItemList key={data.title+idx} todo={data}
                idx={idx} onClickDelete={onClickDelete}
                onClickUpdate={onClickUpdate} onClickEdit={onClickEdit}
                onClickSave={onClickSave}/> 
              )
            })}
      </ul>
    </div>
  );
}

export default App;
