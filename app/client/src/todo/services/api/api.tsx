import axios from 'axios';
import { Todo } from './../../model/todo-model/todo';
import { addNewTodoHttp, deleteTodoHttp, getAllCompletedHttp, getAllHttp, getAllInCompletedHttp, updateTodoHttp } from '../../services/http/http';

export async function fetchTodo(): Promise<Todo[]> {
  try {
    const response = await axios.get<Todo[]>(getAllHttp);
    return response.data;          
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchCompletedTodo(): Promise<Todo[]> {
  try {
    const response = await axios.get<Todo[]>(getAllCompletedHttp);
    return response.data;          
  } catch (error) {
    console.log(error);
    return [];
  }   
}

export async function fetchInCompletedTodo(): Promise<Todo[]> {
  try {
    const response = await axios.get<Todo[]>(getAllInCompletedHttp);
    return response.data;          
  } catch (error) {
    console.log(error);
    return [];
  }  
}

export async function updateStatusTodo(id: number) {
  try {
    await axios.put(`${updateTodoHttp}/${id}`);      
  } catch (error) {
    console.log(error);
  }
}
  
export async function deleteTodo(id: number) {
  try {
    await axios.delete(`${deleteTodoHttp}/${id}`);      
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(data: string){
  try {
    await axios.post( `${addNewTodoHttp}`, {title: data});    
  } catch (error) {
    console.log(error)
  }
}