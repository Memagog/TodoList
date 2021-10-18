import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}
    
    @Post('add')
    create(@Body() CreateTodoDto: CreateTodoDto) {
        return this.todoService.createTodo(CreateTodoDto);
    }

    @Get()   
    findAll(@Query('completed') completed: string) {
        return this.todoService.getAllTodo(completed);
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
