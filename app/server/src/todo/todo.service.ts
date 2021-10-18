import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>){}

    async createTodo(dto: CreateTodoDto): Promise<Todo> {
        const todo = await this.todoRepository.save(dto);
        return todo;
    }

    async getAllTodo(completed: string): Promise<Todo[]> {
        let todo: Todo[] = [];       
        if ( completed === 'true' ) {
            todo = await this.todoRepository.find({ where: { status: true }});
        }
        else if ( completed === 'false' ) {
            todo = await this.todoRepository.find({ where: { status: false }});
        }
        else {
            todo = await this.todoRepository.find({ order: { id: 1 }});            
        }
        return todo;   
    }   

    async updateStatusTodo ( id: string ): Promise<Todo[]> {
        const todo = await this.todoRepository.findOne(id).then((e) => {
            e.status = !e.status;
            return e;
        });
        await this.todoRepository.save(todo);
        return await this.todoRepository.find();     
    }

    async deleteTodo(id: string): Promise<string> {
        const employee = await this.todoRepository.findOne(id);
        await this.todoRepository.remove(employee);
        return `Delete employee by ${id}`
    }

}
