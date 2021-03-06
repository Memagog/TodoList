import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoDAO } from './dao/todo-dao';

@Module({
  providers: [TodoService, TodoDAO],
  controllers: [TodoController],
  imports: [TypeOrmModule.forFeature([Todo])]
})
export class TodoModule {}
