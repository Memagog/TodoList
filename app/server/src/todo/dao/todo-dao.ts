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

    async findAllTodo(completed: boolean): Promise<Todo[]> {        
        return completed
        ? await this.todoRepository.find({ 
            where: { status: completed },
            order: { id: 'DESC' }
        })
        : await this.todoRepository.find({ order: { id: 'DESC' } }); 
    }

    async updateTodo(id: string, completed: boolean): Promise<void> {
        const todo = await this.todoRepository.findOne(id).then(e => {
            e.status = !e.status;
            return e;
        })        
        await this.todoRepository.save(todo); 
        // await this.todoRepository.update(id, { status: completed } ); Не работает для TRUE значений, не могу понять почему     
    }
    
    async deleteTodo(id: string): Promise<void> {
        const removeTodo = await this.todoRepository.delete(id);
        if (!removeTodo.affected) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
    }
}