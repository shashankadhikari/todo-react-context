import React,{useReducer,useEffect} from 'react';
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos"
import {ADD_TODO} from "./context/action.types";


function App() {
  //store all todo in list called todos
  const [todos, dispatch] = useReducer(todoReducer,[]) 

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos")
    if(localTodos){
        dispatch({
            type: ADD_TODO,
            payload: (JSON.parse(localTodos))
        })
    }
},[])

useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);



  return (
    <TodoContext.Provider value={{ todos, dispatch}}>
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  )
}

export default App;

