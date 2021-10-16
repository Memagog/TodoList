import React, {useEffect, useState} from 'react';

import './App.css';
import {Todo} from './types/types'
import axios from 'axios';
import List from './components/List/List';
import { ListItemComponent } from './components/List/ListItem/ListItem';
import Header from './components/Header/Header';
import  Input from './components/Input/Input';

function App() {
  const [flag, setFlag] = useState(true)
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState<Todo[]>([]);
  const [incompleted, setInCompleted] = useState<Todo[]>([]);
  
  useEffect(() => {
     fetchTodo();
     fetchInCompletedTodo();
     fetchCompletedTodo();
  }, [flag])

  async function fetchTodo() {
    try {
      const response = await axios.get<Todo[]>('http://localhost:4000/todo');
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  async function fetchCompletedTodo() {
    try {
      const response = await axios.get<Todo[]>('http://localhost:4000/todo/completed');
      setCompleted(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  async function fetchInCompletedTodo() {
    try {
      const response = await axios.get<Todo[]>('http://localhost:4000/todo/incompleted');
      setInCompleted(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
     <div className = "container">
      <Input setFlag = {() => setFlag(!flag)}/> 
      <Header 
        mainList = {  
          <List items = {todos} renderItem = {(todo) => <ListItemComponent todo = {todo} setFlag = {() => setFlag(!flag)}/>} />
        }
        completedList = {
          <List items = {completed} renderItem = {(todo) => <ListItemComponent todo = {todo} setFlag = {() => setFlag(!flag)}/>} />
        }
        inCompletedList = {
          <List items = {incompleted} renderItem = {(todo) => <ListItemComponent todo = {todo} setFlag = {() => setFlag(!flag)}/>} />
        }
      />    
     </div>
    </div>
  );
}

export default App;
