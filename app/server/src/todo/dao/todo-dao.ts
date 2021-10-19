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

    async updateTodo(id: string): Promise<void> {
        const todo = await this.todoRepository.findOne(id).then(e => {
            e.status = !e.status;
            return e;
        });
        await this.todoRepository.save(todo);       
    }
    
    async deleteTodo(id: string): Promise<void> {
        const todo = await this.todoRepository.findOne(id);
        await this.todoRepository.remove(todo);
    }
}