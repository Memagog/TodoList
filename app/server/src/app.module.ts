import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig } from './config/app.config';
import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
    }),
    TypeOrmModule.forRoot(AppConfig.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Todo]),
    TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
