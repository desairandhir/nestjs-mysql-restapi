import { IsString, IsInt } from 'class-validator';

export class CreateStudentDto {
  // @IsInt()
  // id: number;

@IsString()
  firstName: string;

@IsString()
  lastName: string;

@IsInt()
  contact: number;
  
@IsString()
  course: string;
}