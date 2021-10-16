import React, {useEffect, useState} from 'react';

import './App.css';
import {Todo} from './types/types'
import axios from 'axios';
import List from './components/List/List';
import { ListItemComponent } from './components/List/ListItem/ListItem';

function App() {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
     fetchTodo()
  }, [])

  async function fetchTodo() {
    try {
      const response = await axios.get<Todo[]>('http://localhost:4000/todo');
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
     <div>
      <List items = {todos} renderItem = {(todo) => <ListItemComponent todo = {todo}/>} />
     </div>
    </div>
  );
}

export default App;
