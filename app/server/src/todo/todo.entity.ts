import { ApiProperty } from "@nestjs/swagger";
import { Column,  Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
  @ApiProperty({ example: '1', description: 'unique identifier'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Add Docker in my pet-project', description: 'todo title'})
  @Column()
  title: string;

  @ApiProperty({ example: 'false', description: 'todo status (completed/incompleted)'})
  @Column({ default: false })
  status: boolean;
}