import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { Todo } from "../todo.entity";


export class TodoDAO {
    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>){}

    async create(dto: CreateTodoDto): Promise<Todo> {
        const todo = await this.todoRepository.save(dto);
        return todo;    
    }

    async getAll(): Promise<Todo[]> {
        return this.todoRepository.find({ order: { id: 'DESC' }})
    }

    async getAllStatusTodo(completed: boolean): Promise<Todo[]> {        
        return await this.todoRepository.find({ 
            where: { status: completed },
            order: { id: 'DESC' }
        })      
    }

    async updateTodo(id: string, completed: boolean): Promise<Todo> {
        await this.todoRepository.update(id, { status: completed })
        return this.todoRepository.findOne(id);
    }
    
    async deleteTodo(id: string): Promise<void> {
        const removeTodo = await this.todoRepository.delete(id);   
    }
}