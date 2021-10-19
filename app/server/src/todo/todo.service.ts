import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoDAO } from './dao/todo-dao';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
@Injectable()
export class TodoService {
    constructor(private todoDao: TodoDAO){}
   
    createTodo(dto: CreateTodoDto): Promise<Todo> {        
        return this.todoDao.create(dto);;
    }
    
    getAllTodo(completed: boolean): Promise<Todo[]> {
        return this.todoDao.findAllTodo(completed);  
    }   

    updateStatusTodo(id: string, completed: boolean): string {
        this.todoDao.updateTodo(id, completed);  
        return `Update todo by id: ${id}`;
    }

    deleteTodo(id: string): string {
        this.todoDao.deleteTodo(id);
        return `Delete todo by id: ${id}`;
    }

}
