import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>){}

    async createTodo(dto: CreateTodoDto) {
        const todo = await this.todoRepository.save(dto);
        return await this.todoRepository.find();
    }

    async getAllTodo(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async getAllCompleted(): Promise<Todo[]> {
        const completedTodo = await this.todoRepository.find({ where: { status: true }});
        return completedTodo;
    }

    async getAllInCompleted(): Promise<Todo[]> {
        const completedTodo = await this.todoRepository.find({ where: { status: false }});
        return completedTodo;
    }

    async updateStatusTodo ( id: string ): Promise<Todo[]> {
        const todo = await this.todoRepository.findOne(id).then((e) => {
            e.status = !e.status;
            return e;
        });
        await this.todoRepository.save(todo);
        return await this.todoRepository.find();     
    }

    async deleteTodo(id: string) {
        const employee = await this.todoRepository.findOne(id);
        await this.todoRepository.remove(employee);
        return `Delete employee by ${id}`
    }

}
