import { Todo } from './../../model/todo-model/todo';
import { addNewTodoHttp, deleteTodoHttp, getAllCompletedHttp, getAllHttp, getAllInCompletedHttp, updateTodoHttp } from '../../services/http/http';
import { instance } from './index';

export async function fetchTodo(): Promise<Todo[]> {
  try {
    const response = await instance.get<Todo[]>(getAllHttp);
    return response.data;          
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchCompletedTodo(): Promise<Todo[]> {
  try {
    const response = await instance.get<Todo[]>(getAllCompletedHttp);
    return response.data;          
  } catch (error) {
    console.log(error);
    return [];
  }   
}

export async function fetchInCompletedTodo(): Promise<Todo[]> {
  try {
    const response = await instance.get<Todo[]>(getAllInCompletedHttp);
    return response.data;          
  } catch (error) {
    console.log(error);
    return [];
  }  
}

export async function updateStatusTodo(id: number, status: boolean): Promise<void> {
  try {
    await instance.put(`${updateTodoHttp}/${id}?completed=${!status}`);      
  } catch (error) {
    console.log(error);
  }
}
  
export async function deleteTodo(id: number): Promise<void> {
  try {
    await instance.delete(`${deleteTodoHttp}/${id}`);      
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(data: string): Promise<void>{
  try {
    await instance.post( `${addNewTodoHttp}`, {title: data});    
  } catch (error) {
    console.log(error);
  }
}