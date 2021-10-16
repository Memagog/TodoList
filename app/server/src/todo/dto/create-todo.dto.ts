import { IsBoolean, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateTodoDto {  

  @IsString({ message: 'Title must be a STRING'})
  @Length(1, 50, { message: `Title length 3 - 50 chars`})
  title: string;
 
}