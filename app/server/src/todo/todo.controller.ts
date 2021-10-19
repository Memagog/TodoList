import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './todo.entity';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}
    
    @ApiOperation({ summary: 'You can create new Todo!'})
    @ApiResponse({ status: 200, type: Todo })
    @Post('add')
    create(@Body() CreateTodoDto: CreateTodoDto) {
        return this.todoService.createTodo(CreateTodoDto);
    }

    @ApiOperation({ summary: 'You can get all/completed/incompleted Todo!'})
    @ApiResponse({ status: 200, type: [Todo] })
    @Get()   
    findAll(@Query('completed') completed: boolean) {
        return this.todoService.getAllTodo(completed);
    }

    @ApiOperation({ summary: 'You can update status Todo!'})
    @ApiResponse({ status: 200, type: String })    
    @Put('update/:id')
    updateTodo(@Param('id') id: string, @Query('completed') completed: boolean) {
        return this.todoService.updateStatusTodo(id, completed);
    }

    @ApiOperation({ summary: 'You can delete Todo!'})
    @ApiResponse({ status: 200, type: `Delete Todo by id 5` })
    @Delete('del/:id')
    delete(@Param('id') id: string) {
        return this.todoService.deleteTodo(id);
    }
    
}
