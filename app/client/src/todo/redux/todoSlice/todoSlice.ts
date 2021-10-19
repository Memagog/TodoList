import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store/store';
import { Todo } from '../../model/todo-model/todo';
import { createTodo, fetchTodo } from '../../services/api/api';


export interface TodoState {
  todo: Todo[]; 
}

const initialState: TodoState = {
  todo: [],
};

export const getTodoAsync = createAsyncThunk(
  'todo/fetchTodo',
  async () => {
    const response = await fetchTodo();
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
  async (id: string) => {
    const response = await createTodo(id);
    return response;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  'todo/deleteTodo',
  async (id: string) => {
    const response = await createTodo(id);
    return response;
  }
);

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state) => {
      // state.todo;
    },
    getTodo: (state) => {
      // state.todo;
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      // state.todo;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      // state.todo;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodoAsync.pending, (state) => {
       
      })
      .addCase(getTodoAsync.fulfilled, (state, action) => {       
        state.todo = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.todo;
export default counterSlice.reducer;
