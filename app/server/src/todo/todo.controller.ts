import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ValidationPipe } from './../pipes/validation.pipes';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() CreateTodoDto: CreateTodoDto) {
        return this.todoService.createTodo(CreateTodoDto);
    }

    @Get()
    findAll() {
        return this.todoService.getAllTodo();
    }

    @Get('completed')
    getCompletedTodo() {
        return this.todoService.getAllCompleted();
    }

    @Get('incompleted')
    getInCompletedTodo() {
        return this.todoService.getAllInCompleted();
    }

    @Put('update/:id')
    updateTodo(@Param('id') id: string) {
        return this.todoService.updateStatusTodo(id);
    }

    @Delete('del/:id')
    delete(@Param('id') id: string) {
        return this.todoService.deleteTodo(id);
    }
    
}
