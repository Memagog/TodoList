import React, {useEffect, useState} from 'react';
import './Container.scss';
import {Todo} from '../../model/todo-model/todo';
import List from '../List/List';
import { ListItemComponent } from '../ListItem/ListItem';
import  Input from '../Input/Input';
import TabBar from '../TabBar/TabBar';
import { fetchCompletedTodo, fetchInCompletedTodo, fetchTodo } from '../../services/api/api';

function Container() {
  const [flag, setFlag] = useState(true)
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState<Todo[]>([]);
  const [incompleted, setInCompleted] = useState<Todo[]>([]);
  
  useEffect(() => {
    fetchTodo().then((e) => setTodos(e));   
    fetchInCompletedTodo().then((e) => setCompleted(e));   
    fetchCompletedTodo().then((e) => setInCompleted(e));   
  }, [flag])  

  return (    
     <div className = "container">
      <Input setFlag = {() => setFlag(!flag)}/>       
      <TabBar 
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
  );
}

export default Container;
