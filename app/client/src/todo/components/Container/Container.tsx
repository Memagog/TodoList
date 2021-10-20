import React, {useEffect, useState} from 'react';
import './Container.scss';
import List from '../List/List';
import { ListItemComponent } from '../ListItem/ListItem';
import  Input from '../Input/Input';
import TabBar from '../TabBar/TabBar';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getAllCompletedTodoAsync, getAllInCompletedTodoAsync, getAllTodoAsync, todoState } from '../../redux/todoSlice/todoSlice';

function Container() {
  const [flag, setFlag] = useState(true)
  const stateTodo = useAppSelector(todoState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(getAllTodoAsync());            
      dispatch(getAllCompletedTodoAsync());     
      dispatch(getAllInCompletedTodoAsync());        
    } catch (error) {
      
    } finally {
      console.log(stateTodo.todoCompleted)
    }    
    
  }, [flag]);   

  return (    
     <div className = "container">
      <Input setFlag = {() => setFlag(!flag)}/>       
      <TabBar 
        mainList = {  
          <List items = {stateTodo.todoAll} renderItem = {(todo) => <ListItemComponent todo = {todo} setFlag = {() => setFlag(!flag)}/>} />
        }
        completedList = {
          <List items = {stateTodo.todoCompleted} renderItem = {(todo) => <ListItemComponent todo = {todo} setFlag = {() => setFlag(!flag)}/>} />
        }
        inCompletedList = {
          <List items = {stateTodo.todoIncompleted} renderItem = {(todo) => <ListItemComponent todo = {todo} setFlag = {() => setFlag(!flag)}/>} />
        }
      />    
     </div>  
  );
}

export default Container;
