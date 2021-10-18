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

    async findTodo(completed: string) {
        let todo: Todo[] = [];       
        if ( completed === 'true' ) {
            todo = await this.todoRepository.find({ where: { status: true }});
        }
        else if ( completed === 'false' ) {
            todo = await this.todoRepository.find({ where: { status: false }});
        }
        else {
            todo = await this.todoRepository.find({ order: { id: 'ASC' }});            
        }
        return todo; 
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