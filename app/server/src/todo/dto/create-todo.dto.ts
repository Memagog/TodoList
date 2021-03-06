import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, Length } from "class-validator";

export class CreateTodoDto {  

  @ApiProperty({ example: 'By Milk and Cacao!', description: 'title todo' })  
  @IsString({ message: 'Title must be a STRING' })
  @Length(1, 50, { message: `Title length 3 - 50 chars` })
  title: string;

  @IsBoolean({ message: 'ststus must be a string'})
  @ApiProperty({ example: 'false', description: 'status todo', default: 'false' })
  status?: boolean; 
}