import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Todo } from "src/todo/todo.entity";

export class AppConfig {
    static getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',       
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [Todo],
            synchronize: true,
            autoLoadEntities: true,
        }
    }
}