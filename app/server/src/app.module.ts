import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',       
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Todo],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Todo]),
    TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
