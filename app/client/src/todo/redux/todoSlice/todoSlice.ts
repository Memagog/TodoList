import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { Todo, updateTodo } from '../../model/todo-model/todo';
import { createTodo, deleteTodo, fetchCompletedTodo, fetchInCompletedTodo, fetchTodo, updateStatusTodo } from '../../services/api/api';


export interface TodoState {
  todoAll: Todo[];
  todoCompleted: Todo[];
  todoIncompleted: Todo[]; 
}

const initialState: TodoState = {
  todoAll: [],
  todoCompleted: [],
  todoIncompleted: []
};

export const getAllTodoAsync = createAsyncThunk(
  'todo/fetchTodo',
  async () => {
    const response = await fetchTodo();
    return response;
  }
);

export const getAllCompletedTodoAsync = createAsyncThunk(
  'todo/fetchCompletedTodo',
  async () => {
    const response = await fetchCompletedTodo();   
    return response;
  }
);

export const getAllInCompletedTodoAsync = createAsyncThunk(
  'todo/fetchInCompletedTodo',
  async () => {
    const response = await fetchInCompletedTodo();
    return response;
  }
);

export const addTodoAsync = createAsyncThunk(
  'todo/addTodo',
  async (data: string) => {
    const response = await createTodo(data);
    return response;
  }
);

export const updateTodoAsync = createAsyncThunk(
  'todo/updateTodo',
  async (data: updateTodo) => {
    const response = await updateStatusTodo(data.id, data.status);
    return response;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  'todo/deleteTodo',
  async (id: number) => {
    const response = await deleteTodo(id);
    return response;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodoAsync.pending, (state) => {
        state.todoAll = [];
      })
      .addCase(getAllTodoAsync.fulfilled, (state, action) => {       
        state.todoAll = action.payload;
      })
    builder
      .addCase(getAllCompletedTodoAsync.pending, (state) => {
        state.todoCompleted = [];
      })
      .addCase(getAllCompletedTodoAsync.fulfilled, (state, action) => {       
        state.todoCompleted = action.payload;
      })
    builder
      .addCase(getAllInCompletedTodoAsync.pending, (state) => {
        state.todoIncompleted = [];
      })
      .addCase(getAllInCompletedTodoAsync.fulfilled, (state, action) => {       
        state.todoIncompleted = action.payload;
      })
    builder
      .addCase(updateTodoAsync.pending, (state) => {})
      .addCase(updateTodoAsync.fulfilled, (state, action) => {})
    builder
      .addCase(deleteTodoAsync.pending, (state) => {})
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {})
    builder
      .addCase(addTodoAsync.pending, (state) => {})
      .addCase(addTodoAsync.fulfilled, (state, action) => {})
  },
});

export const todoState = (state: RootState) => state.todo;
export default todoSlice.reducer;
