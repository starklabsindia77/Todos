import React, {useEffect, useState} from 'react';
import './App.css';

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  // function 

  useEffect(()=>{
    filterHandler();
    saveLocal();
  },[todos, status]);

  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);

    }
  }

  const saveLocal =()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Varun Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText = {setInputText} inputText={inputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
