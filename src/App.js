
import './App.css';
import CreateList from './Component/CreateList';
import ListPss from './Component/ListPss';
import { useState, useRef } from 'react';

function App() {
  const [ inputs, setInputs ] = useState({
    Message:""
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]:value,
    })
    console.log(inputs);
  }
  const [List, setList] = useState([
    {
      id : 1,
      Message:'ㅇㅇ',
    },
    
  ]);

  const nextId = useRef(2);

  const onCreate = () => {
    const newList = {
      id : nextId.current,
      Message:inputs.Message,
    }
    setList([...List,newList]);
    setInputs({
      Message:''
    });
    console.log(inputs);
    nextId.current += 1;
  }

  return (
    <div className="App">
      <CreateList onChange={onChange} onCreate={onCreate}/>
      <ListPss List={List}/>
    </div>
  );
}

export default App;
